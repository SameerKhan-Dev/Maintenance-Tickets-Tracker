
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "index.scss";
import React, { Fragment } from 'react'
import Application from "components/Application";
import Router from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import registerServiceWorker from './registerServiceWorker';
// import register from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
            <Application />
    </React.StrictMode>,
    document.getElementById("root")
);
