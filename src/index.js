import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'; //importing here to avoid duplication in app.js and other files


// var express = require('express');
// var router = express.Router;
// var nodeMailer = require('nodemailer');
// var cors = require('cors');
// const creds = require('./config')

// this information are required by gmail in order for the contact form request to work aka send the contact form values to the fixed recipient email address detailed in the config.js

// var mailTransport = {
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//         user: creds.USER,
//         pass: creds.PASS
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

// const app = express()
// app.use(express.json);
// app.use('/', router);
// app.listen(3002)

reportWebVitals();
