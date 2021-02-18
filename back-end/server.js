// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const database = require("./database/database");
const getAllPropertiesByPM_Id = require("./database/databaseHelpers/getAllPropertiesByPM_Id");
const getAllTicketsByPm_Id = require("./database/databaseHelpers/getAllTicketsByPm_Id");
const getAllEmployeesByProperty_Id = require("./database/databaseHelpers/getAllEmployeesByProperty_Id");
const assignEmployeeForTicket_Id = require("./database/databaseHelpers/assignEmployeeForTicket_Id");
const getAllTicketsByEmployee_Id = require("./database/databaseHelpers/getAllTicketsByEmployee_Id");
const getUserByEmail = require("./database/databaseHelpers/getUserByEmail");
const addNewTicket = require("./database/databaseHelpers/addNewTicket");
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

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

//app.set("view engine", "ejs");
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

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
//const usersRoutes = require("./routes/users");
//const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
//app.use("/api/users", usersRoutes(db));
//app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above)5

app.get("/homepage", (req, res) => {
  res.send("Hello from: route 1  ");
});
// 1 
app.post("/register", (req, res) => {
  res.send("Hello from: route 2  ");
});
//2
// check user email and password, only allow valid user to login
app.post("/login", (req, res) => {
  const user_email = req.body.email;
  const password = req.body.password;
  console.log("user_email = ", user_email);
  console.log("password = ", password);
  const userLogin = getUserByEmail(user_email)
    .then((response) => {
      if (response[0] && response[0].password === password) {
        req.session.user_id = response[0].id;
        // res.redirect(`/my_properties/${req.session.user_id}`);
        console.log("Hello from: route 2  ");
        // res.send(response[0].id);
        // let user_id = JSON.stringify({user_id: response[0].id});
        res.send(response[0]);

      } else {
        // res.send(response);
        res.send("Your email or password is invalid");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send(`${user_email}, ${password}`);
  // res.send(req.body);
});
//3
// get all properties for logged in pm_id
app.get("/my_properties/:pm_id", (req, res) => {
  const pm_id = req.params.pm_id;
  console.log("Hello from: route 4 ");

  myProperties = getAllPropertiesByPM_Id(pm_id).then((response) => {
    res.send(response);
  });
});

//4
// get all tickets for all properties, for logged in PM.
app.get("/properties/:pm_id/tickets", (req, res) => {
  const pm_id = req.params.pm_id;

  console.log("Hello from: route 5  ");

  propertyTickets = getAllTicketsByPm_Id(pm_id).then((response) => {
    res.send(response);
  });
});

//6
app.put("/tickets/assignEmployee", (req, res) => {
  // extract the values from the request body.
  //const {ticket_id} = req.body.ticket_id;
  //const {employee_id} = req.body.employee_id;
  const ticket_id = req.body.ticket_id;
  const employee_id = req.body.employee_id;

  console.log("Hello from: route 7  ");
  const allTickets = assignEmployeeForTicket_Id(employee_id, ticket_id)
  .then((response) => {
    res.send(response);
  });

  //res.send(`ticket_id is: ${ticket_id}, employee_id is: ${employee_id} `);
  //res.send(req.body);
});

//7
// add a new ticket to the database
app.post("/tickets/new", (req, res) => {
  const property_id = req.body.property_id;
  const creator_id = req.body.creator_id;
  const maintenance_type_id = req.body.maintenance_type_id;
  const ticket_status_id = req.body.ticket_status_id;
  const description = req.body.description;

  console.log("Hello from: route 8  ");
  const addNewTicket_Tenant = addNewTicket(property_id, creator_id, maintenance_type_id, ticket_status_id, description)
  .then((response) => {
    res.send(response);
  });
});
//8
// neeed this for employee-dashboard when a ticket is marked as resolved.
app.put("/tickets/resolved/:ticket_id", (req, res) => {
  res.send("Hello from: route 9  ");
});
//11
//get the property based on tenant that is logged in
app.get("/property/tenant/:tenant_id", (req, res) => {
  res.send("Hello from: route 10  ");
});
//9
app.get("/properties/employees/:property_id", (req, res) => {
  console.log("Hello from: route 11  ");
  const property_id = req.params.property_id;
  allEmployees = getAllEmployeesByProperty_Id(property_id).then((response) => {
    res.send(response);
  });
});
//10
// get all tickets for an employee when they are logged in.
app.get("/tickets/employee/:employee_id", (req, res) => {
  const employee_id = req.params.employee_id;

  getAllTicketsByEmployee_Id(employee_id).then((response) => {
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
