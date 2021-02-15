import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";

import Employee_Interface from  "./Employee_Interface"
import Side_NavBar_Emp from "./Side_NavBar_Emp";


export default function Employee_Dashboard(props) {

    return (
      <>
        <div>
            <Side_NavBar_Emp/>
        </div>
        <div>
          <h1>Im the content on the right side!</h1>
        </div>
      </>
    );
}

