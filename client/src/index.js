
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "index.scss";
import React, { Fragment } from 'react'
import Application from "components/Application";
import Router from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
            <Application />
    </React.StrictMode>,
    document.getElementById("root")
);
