import React, {useState} from 'react';
import {useEffect} from 'react';
import "components/Application.scss";
const axios = require('axios');


export default function Application(props) {

  const [state, setState] = useState("Empty");

  useEffect(() => {
    axios.get("/homepage")
    .then(response => {
      //console.log(response)
      setState(response.data)
    })
  },[]);



  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
        
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {state}
      </section>
    </main>
  );
}
