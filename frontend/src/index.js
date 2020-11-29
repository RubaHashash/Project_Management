/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import RegisterLayout from "components/Authentication/RegisterLayout.js";
import LoginLayout from "components/Authentication/LoginLayout.js";

import AdminDashboard from "./AdminLayout/AdminDashboard";

import CompanyForm from "components/CompanyForm.js";
import ProjectManagerDashboard from "ProjectManagerLayout/ProjectManagerDashboard";
import ViewActivity from "ProjectManagerLayout/ViewActivity";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
      <Route path="/login" render={(props) => <LoginLayout {...props} />} />
      {/* <Redirect to="/login" /> */}
      <Route path="/register" render={(props) => <RegisterLayout {...props} />} />

      <Route path="/admin" render={(props) => <AdminDashboard {...props} />} />

      <Route path="/company" render={(props) => <CompanyForm {...props} />} />

      <Route path="/projectManager" render={(props) => <ProjectManagerDashboard {...props} />} />

      <Route path="/activity" render={(props) => <ViewActivity {...props} />} />

      {/* <Redirect to="/register" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
