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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import AdminProfile from "AdminLayout/AdminProfile"
import ManageEmployees from "AdminLayout/ManageEmployees"
import AdminCharts from "AdminLayout/AdminCharts"
import Projects from "AdminLayout/Projects"
import Teams from "AdminLayout/Team"
import UpgradeToPro from "views/Upgrade.js";
var Adminroutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: AdminCharts,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: AdminProfile,
    layout: "/admin",
  },
  {
    path: "/ManageEmployees",
    name: "Manage Employees",
    icon: "nc-icon nc-badge",
    component: ManageEmployees,
    layout: "/admin",
  },

  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-badge",
    component: Projects,
    layout: "/admin",
  },

  // {
  //   path: "/Admincharts",
  //   name: "charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: AdminCharts,
  //   layout: "/admin",
  // },

  // {
  //   path: "/tables",
  //   name: "Projects",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },



  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default Adminroutes;
