import {
//   dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import { Line, Pie,Bar } from "react-chartjs-2";
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {

    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    ButtonToggle,
  } from "reactstrap";

class Charts extends React.Component {
  
  render() {
    return (
                <Card style={{marginTop:"62px"}}>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
    );
  }
}
export default Charts;