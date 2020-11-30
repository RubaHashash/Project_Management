
import React from "react";
import axios from "axios";
// javascript plugin used to create scrollbars on windows
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { Link } from 'react-router-dom';

import ProjectManagerRoutes from "routes/ProjectManagerRoutes";
// reactstrap components
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
} from "reactstrap";

class ViewActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    console.log('/api/milestones/'.concat(this.props.match.params.id));
    axios.get('/api/activities/'.concat(this.props.match.params.id))
      .then(response => {
        console.log("khbdckhbsadhkcbkdsbckhadwbcfkdawb", response.data);
        this.setState({ activities: response.data.data });
      });
  }
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={ProjectManagerRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {ProjectManagerRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>


          <div className="content">
            <Row>
              <Col >
                <Row >
                  {this.state.activities.map(activity => (
                    <Col key={activity.id}>

                      <Card  >
                        <CardHeader>
                          <CardTitle tag="h3">{activity.name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col >
                                <FormGroup>
                                  <label>
                                    {activity.description}
                                  </label>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>

                    </Col>
                  ))}
                </Row>
                <Row>
                </Row>


              </Col>

            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default ViewActivity;
