
import React from "react";
import axios from "axios";
// javascript plugin used to create scrollbars on windows
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

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
  
  constructor(props){
      super(props);
      this.state={
        
  }
}
  
  componentDidMount() {

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

      
            <Col md="12">
              <Row >
              <Card className="card-user"  style={{ marginLeft: "30px", width: "200px", height: "200px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3">Activity 1</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Activity Description here
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>


              <Card className="card-user"  style={{ marginLeft: "30px", width: "200px", height: "200px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3">Activity 2</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Activity Description here
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>

              <Card className="card-user"  style={{ marginLeft: "30px", width: "200px", height: "200px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3">Activity 3</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Activity Description here
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>

              <Card className="card-user"  style={{ marginLeft: "30px", width: "200px", height: "200px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3">Activity 4</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Activity Description here
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>


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
