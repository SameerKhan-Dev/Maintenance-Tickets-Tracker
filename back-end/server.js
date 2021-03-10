// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const fileUpload = require("express-fileupload");

const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const database = require("./database/database");
const getAllPropertiesByPM_Id = require("./database/databaseHelpers/getAllPropertiesByPM_Id");
const getAllTicketsByPm_Id = require("./database/databaseHelpers/getAllTicketsByPm_Id");
const getAllEmployeesByProperty_Id = require("./database/databaseHelpers/getAllEmployeesByProperty_Id");
const assignEmployeeForTicket_Id = require("./database/databaseHelpers/assignEmployeeForTicket_Id");
const getAllTicketsByEmployee_Id = require("./database/databaseHelpers/getAllTicketsByEmployee_Id");
const getUserByEmail = require("./database/databaseHelpers/getUserByEmail");
const addNewTicket = require("./database/databaseHelpers/addNewTicket");
const getPropertyByTenantUser_Id = require("./database/databaseHelpers/getPropertyByTenantUser_Id");
const completeTicketByTicket_Id = require("./database/databaseHelpers/completeTicketByTicket_Id");
const getAllPropertiesByEmployee_Id = require("./database/databaseHelpers/getAllPropertiesByEmployee_Id");
const getUsersById = require("./database/databaseHelpers/getUsersById");
const addNewProperty = require("./database/databaseHelpers/addNewProperty");
const addNewUser = require("./database/databaseHelpers/addNewUser");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response fstatus for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(fileUpload());
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "session",
    keys: [
      "b6d0e7eb-8c4b-4ae4-8460-fd3a08733dcb",
      "1fb2d767-ffbf-41a6-98dd-86ac2da9392e",
    ],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);

app.use(express.static("public"));

app.get("/homepage", (req, res) => {
  res.send("Hello from: route 1  ");
});

// register new user and add to the database
app.post("/register_user/new", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, saltRounds);
  const role_id = req.body.role_id;

  isEmailExist = getUserByEmail(email).then((response) => {
    if (response.length !== 0) {
      res.send(`User email, ${response[0].email} is in the database!`);
    } else {
      addNewUser_PM = addNewUser(
        firstname,
        lastname,
        email,
        password,
        role_id
      ).then((response) => {
        res.send(response);
      });
    }
  });
});

// register new property and add to the database
app.post("/register_property/new", (req, res) => {
  const property_manager_id = req.body.property_manager_id;
  const name = req.body.name;
  const address = req.body.address;
  const unit = req.body.unit;
  const city = req.body.city;
  const province = req.body.province;
  const postal_code = req.body.postal_code;
  const property_type = req.body.property_type;
  const image_path = req.body.image_path;

  addNewProperty_PM = addNewProperty(
    property_manager_id,
    name,
    address,
    unit,
    city,
    province,
    postal_code,
    property_type,
    image_path
  ).then((response) => {
    res.send(response);
  });
});

app.post("/validateUser", (req, res) => {
  // console.log("req.session.user_id = ", req.session.user_id);

  if (req.session !== null) {
    let loggedInUserId = req.session.user_id;
    // cookie is enabled or exists
    // use the loggedInUserId get the userInfo
    // and return
    console.log("Inside req.session !-- null");
    getUsersById(loggedInUserId).then((response) => {
      // console.log("RES is:", res);
      if (response[0]) {
        const responseValue = {
          userInfo: response[0],
          isCookieSet: true,
        };
        console.log("responseValue is:", responseValue);
        res.send(responseValue);
      }
    });
  }

  if (req.session) {
    console.log("req.session = ", req.session);

    const responseValue = {
      userInfo: null,
      isCookieSet: false,
    };
    res.send(responseValue);
    // res.send("Hello");
  }
});

// check user email and password, only allow valid user to login
app.post("/login", (req, res) => {
  const user_email = req.body.email;
  const password = req.body.password;
  console.log("user_email = ", user_email);
  console.log("password = ", password);
  userLogin = getUserByEmail(user_email)
    .then((response) => {
      // console.log("RES is:", res);
      if (response[0] && response[0].password === password) {
        req.session.user_id = response[0].id;
        console.log("response[0]: ", response[0]);
        console.log("REQ.SESSION.USER_ID IS: ", req.session.user_id);
        console.log("RES.header", res);
        // res.redirect(`/my_properties/${req.session.user_id}`);
        console.log("Hello from: route 2  ");
        // res.send(response[0].id);
        // let user_id = JSON.stringify({user_id: response[0].id});
        const responseValue = {
          userInfo: response[0],
          isValid: true,
        };
        console.log("responseValue is:", responseValue);
        res.send(responseValue);

        //res.send(response[0]);
      } else {
        const responseValue = {
          userInfo: null,
          isValid: false,
        };
        //console.log("RES is:", res);
        res.status(400).send(responseValue);

        //res.send("Your email or password is invalid");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send(`${user_email}, ${password}`);
  // res.send(req.body);
});

// logout and clear cookies
app.get("/logout", (req, res) => {
  // console.log("HELLO FROM LOGOUT!");
  // const responseValue = {
  //   userInfo: null,
  //   isLoggedIn: false,
  // };
  // req.session.user_id = null;
  req.session = null;
  res.send("HELLO from LOGOUT");
});

// get all properties for logged in pm_id
app.get("/my_properties/:pm_id", (req, res) => {
  const pm_id = req.params.pm_id;

  console.log("Hello from: route 4 ");

  myProperties = getAllPropertiesByPM_Id(pm_id).then((response) => {
    res.send(response);
  });
});

// get all tickets for all properties, for logged in PM.
app.get("/properties/:pm_id/tickets", (req, res) => {
  const pm_id = req.params.pm_id;

  propertyTickets = getAllTicketsByPm_Id(pm_id).then((response) => {
    res.send(response);
  });
});

// assign employee to ticket and update the ticket status to in-progress (dashboard-pm-tickets)
app.put("/tickets/assignEmployee", (req, res) => {
  const ticket_id = req.body.ticket_id;
  const employee_id = req.body.employee_id;

  allTickets = assignEmployeeForTicket_Id(employee_id, ticket_id).then(
    (response) => {
      res.send(response);
    }
  );
});

// add a new ticket to the database
app.post("/tickets/new", (req, res) => {
  const property_id = req.body.property_id;
  const creator_id = req.body.creator_id;
  const maintenance_type_id = req.body.maintenance_type_id;
  const description = req.body.description;

  addNewTicket_Tenant = addNewTicket(
    property_id,
    creator_id,
    maintenance_type_id,
    description
  ).then((response) => {
    res.send(response);
  });
});

// update ticket status to resolved and update the actual cost (dashboard-employee)
app.put("/tickets/resolved", (req, res) => {
  const ticket_id = req.body.ticket_id;
  const actual_cost = req.body.actual_cost;

  completedTicket = completeTicketByTicket_Id(ticket_id, actual_cost).then(
    (response) => {
      res.send(response);
    }
  );
});

// get the property based on tenant that is logged in
app.get("/property/tenant/:tenant_id", (req, res) => {
  const tenant_id = req.params.tenant_id;

  const property_tenant_id = getPropertyByTenantUser_Id(tenant_id).then(
    (response) => {
      res.send(response);
    }
  );
});

// get all employee info based on property id
app.get("/properties/employees/:property_id", (req, res) => {
  const property_id = req.params.property_id;

  allEmployees = getAllEmployeesByProperty_Id(property_id).then((response) => {
    res.send(response);
  });
});

// get all tickets for an employee when they are logged in.
app.get("/tickets/employee/:employee_id", (req, res) => {
  const employee_id = req.params.employee_id;

  getAllTicketsByEmployee_Id(employee_id).then((response) => {
    res.send(response);
  });
});

// get all properties for an employee.
app.get("/employeeProperties/:employee_id", (req, res) => {
  const employee_id = req.params.employee_id;

  getAllPropertiesByEmployee_Id(employee_id).then((response) => {
    res.send(response);
  });
});

// get all users by user_id.
app.get("/users/:user_id", (req, res) => {
  const user_id = req.params.user_id;

  getUsersById(user_id).then((response) => {
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
