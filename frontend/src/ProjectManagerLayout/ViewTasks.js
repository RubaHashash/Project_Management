
import React from "react";
import axios from "axios";
import Sidebar from "components/Sidebar/Sidebar.js";
import ProjectManagerRoutes from "routes/ProjectManagerRoutes";
import { Route, Switch } from "react-router-dom";
import {Link} from 'react-router-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";


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

class ViewTasks extends React.Component {
  
  constructor(props){
      super(props);
      this.state={
        milestones: [],
  }
}
  
  componentDidMount() {
    this.getTasks();
  }

  getTasks = () =>{
   // console.log('/api/milestones/'.concat(this.props.match.params.id));
    axios.get('/api/milestones/'.concat(this.props.match.params.id))
    .then(response=>{
        console.log(response.data);
        this.setState({milestones:response.data.data});
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
            <Col md="12">
              <Row >
              {this.state.milestones.map(milestone => ( 
              <Col  key={milestone.id}>
              <Link to={`/viewactivities/${milestone.id}`}>
              <Card className="card-user"  style={{ marginLeft: "30px", width: "40%", height: "150px", overflow: "hidden"}}>
                <CardHeader>
              <CardTitle tag="h3">{milestone.name}</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                          {milestone.description}
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Link>

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

export default ViewTasks;
