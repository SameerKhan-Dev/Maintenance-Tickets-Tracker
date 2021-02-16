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

const database = require('./database/database');
const getAllPropertiesByPM_Id = require('./database/databaseHelpers/getAllPropertiesByPM_Id');
const getAllTicketsByProperty_Id = require('./database/databaseHelpers/getAllTicketsByProperty_Id');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

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
// 1
app.get("/homepage", (req, res) => {
  res.send("Hello from: route 1  ");
});
// 2
app.post("/register", (req, res) => {
  res.send("Hello from: route 2  ");
});
//3
app.post("/login", (req, res) => {
  res.send("Hello from: route 3  ");
});
//4
app.get("/my_properties", (req, res) => {
  
  console.log("Hello from: route 4 ");

  myProperties = getAllPropertiesByPM_Id(1)
  .then((response) => {
    res.send(response);
});
  
});
//5
app.get("/properties/:property_id/tickets", (req, res) => {
  console.log("Hello from: route 5  ");
  propertyTickets = getAllTicketsByProperty_Id(4)
  .then((response) => {
    res.send(response);
  });
 
});
//6
app.get("/tickets-dashboard/properties", (req, res) => {
  res.send("Hello from: route 6");
});

app.get("/properties/:property_id/employees", (req, res) => {
  res.send("Hello from: route 6");
});
//7
app.put("/tickets/update/:ticket_id", (req, res) => {
  res.send("Hello from: route 7  ");
});
//8
app.post("/tickets/new", (req, res) => {
  res.send("Hello from: route 8  ");
});
//9
app.put("/tickets/update/:ticket_id", (req, res) => {
  res.send("Hello from: route 9  ");
});
//10
app.get("/property/tenant/:tenant_id", (req, res) => {
  res.send("Hello from: route 10  ");
});
//11
app.get("/tickets/employee/:employee_id", (req, res) => {
  res.send("Hello from: route 11  ");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
