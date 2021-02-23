const router = require("express").Router();

const getAllPropertiesByPM_Id = require("../database/databaseHelpers/getAllPropertiesByPM_Id");
const getAllTicketsByPm_Id = require("../database/databaseHelpers/getAllTicketsByPm_Id");
const getAllEmployeesByProperty_Id = require("../database/databaseHelpers/getAllEmployeesByProperty_Id");
const assignEmployeeForTicket_Id = require("../database/databaseHelpers/assignEmployeeForTicket_Id");
const getAllTicketsByEmployee_Id = require("../database/databaseHelpers/getAllTicketsByEmployee_Id");
const getUserByEmail = require("../database/databaseHelpers/getUserByEmail");
const addNewTicket = require("../database/databaseHelpers/addNewTicket");
const getPropertyByTenantUser_Id = require("../database/databaseHelpers/getPropertyByTenantUser_Id");
const completeTicketByTicket_Id = require("../database/databaseHelpers/completeTicketByTicket_Id");
const getAllPropertiesByEmployee_Id = require("../database/databaseHelpers/getAllPropertiesByEmployee_Id");
const getUsersById = require("../database/databaseHelpers/getUsersById");

const creds = require('../creds');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: creds.accessKey,
  secretAccessKey: creds.secretAccessKey
})

const saltRounds = 10;

router.get("/addImage", (req, res) => {
  let user_id = req.session.user_id;
  let email;

  if(user_id){
    databaseHelper.getUserData(user_id)
    .then (result => {
      email = result.email;
      let templateVars = {
        email: email

      }
      res.render('addImage', templateVars);
    })
  } else {
    res.send("error: you must be logged in to view this page.");
  }
});

router.get("/myImages", (req, res) => {

  let user_id = req.session.user_id;
  let allImages;
  let email;
  
  if (user_id) {
    
    // user the user_id to retrieve all the images belonging to user.
    databaseHelper.getUserData(user_id)
    .then (result => {
      email = result.email;

    })
    .then (result => {
      return databaseHelper.getAllImagesByUserId(user_id)
    })
    .then (result => {
      allImages = result;
      let templateVars = {
        allImages: allImages,
        email: email,
      }
      res.render('myImagesList', templateVars);
    });  
  } else {
    res.send("error: you must be logged in to view this page.");
  }
});

router.get("/view/:image_id", (req, res) => {
  let user_id = req.session.user_id;
  let image_id = req.params.image_id;
  let email;
  let imageInfo;
  
  if (user_id) {
    // user the user_id to retrieve the specific email for user
    databaseHelper.getUserData(user_id)
    .then (result => {
      email = result.email;
    })
    .then (result => {
      // get the specific image info using the image_id
      return databaseHelper.getImageByImageId(image_id);
    })
    .then (result => {
      // check if image belongs to user'
      //res.send(result);
      if(result[0].owner_id === user_id){
        imageInfo = result[0];
      
        let templateVars = {
          imageInfo: imageInfo,
          email: email
        }
        res.render('specific_image', templateVars);
      } else {
        res.send("error: image does not belong to currently logged in user, so can not view.");
      }
    }).catch(err => {
      res.send("error: found error", err);
    });
  } else {
    res.send("error: you must be logged in to view this page.");
  }
});

router.get("/serveImage/:temp", (req, res) => {
  let user_id = req.session.user_id;
  let image_path = req.query.p;
  let email;
  let imageInfo;
  
  if (user_id){
    
    // user the user_id to retrieve the specific email for user
    databaseHelper.getUserData(user_id)
    .then (result => {
      email = result.email;
    })
    .then (result => {
      // get the specific image info using the image_id
      return databaseHelper.getImageByImagePath(image_path);
    })
    .then (result => {
      // check if image belongs to user'
      //res.send(result);
      if(result[0].owner_id === user_id){
        imageInfo = result[0];
      
        const params = {
          Bucket: creds.s3Bucket,
          Key: result[0].filepath
        };

        s3.getObject(params, (err, data) => {
          if (err) {
            return res.send("error: cannot retrieve file");
          }
          var ext = image_path.substr(image_path.lastIndexOf('.') + 1);
          res.contentType(ext);
          res.send(data.Body)
        });
      } else {
        res.send("error: image does not belong to currently logged in user, so can not view.");
      }
    });
  } else {
    res.send("error: you must be logged in to view this page.");
  }
});

router.post("/addImage", (req, res) => {
  
  let user_id = req.session.user_id;
  let category = req.body.category_id;
  let image_id;

  if(user_id){
    let title = req.body.title;
    let description = req.body.description;
    let imageUpload = req.body.imageUpload;
      
    const params = {
      Bucket: creds.s3Bucket,
      Key: `${user_id}/${req.files.imageUpload.name}`,
      Body: req.files.imageUpload.data
    };

    s3.upload(params, (err, data) => {
      if (err) {
        return res.send("error: couldnt upload image 1");
      }

      databaseHelper.addImage(user_id,title, params.Key, description, category).then(result => {
        image_id = result[0].id;
        res.redirect(`/images/view/${image_id}`);
      })
      .catch(err => {
        return res.send("error: couldnt upload image 2");
      })
    });
  } else {
    res.send("error: you must be logged in to post to this site.");
  } 
});

module.exports = router;