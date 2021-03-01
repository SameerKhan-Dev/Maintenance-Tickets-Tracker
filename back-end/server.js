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

// 1
app.post("/register", (req, res) => {
  res.send("Hello from: route 2  ");
});

// check user email and password, only allow valid user to login
app.post("/login", (req, res) => {
  const user_email = req.body.email;
  const password = req.body.password;
  console.log("user_email = ", user_email);
  console.log("password = ", password);
  userLogin = getUserByEmail(user_email)
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

// logout and clear cookies
app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
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
