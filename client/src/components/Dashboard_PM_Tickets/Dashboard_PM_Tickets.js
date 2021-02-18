import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";

import Employee_List_PM from "./Employee_List_PM";
import Ticket_List_PM from "./Ticket_List_PM";
// import Side_NavBar_PM_Stats from "/Users/zahrahm/lighthouse/final-project/Maintenance-Tickets-Tracker/client/src/components/Dashboard_PM_Stats/Side_NavBar_PM_Stats.js";
import Side_NavBar_PM_Tickets from "./Side_NavBar_PM_Tickets"
import Top_NavBar_PM_Tickets from "./Top_Nav_Bar_PM_Tickets";
import "./Dashboard_PM_Tickets.scss";



export default function Dashboard_PM_Tickets(props) {

    return (
      <div className="dashboard">
        <Side_NavBar_PM_Tickets/>
        <div className="dashboard-interface">
          <Top_NavBar_PM_Tickets/>
          <Employee_List_PM />
          <Ticket_List_PM />
        </div>
      </div>

    );
}