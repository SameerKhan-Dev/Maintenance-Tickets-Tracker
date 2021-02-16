import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";

import All_Property_Interface from "./All_Property_Interface";
import Side_NavBar_PM_Stats from "./Side_NavBar_PM_Stats";


export default function Dashboard_PM_Stats(props) {

    return (
      <>
        <div>
          <Side_NavBar_PM_Stats/>
        </div>
        <div>
          <All_Property_Interface />
        </div>
        
      </>
    );
}