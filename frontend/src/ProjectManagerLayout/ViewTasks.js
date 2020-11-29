
import React from "react";
import axios from "axios";

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
    axios.get('/api/milestones/1')
    .then(response=>{
        console.log(response.data);
        this.setState({milestones:response.data});
    });
  }


  render() {
    return (
      <>
        <div className="content">
          <Row>

      
            <Col md="12">
              <Row >
              <Card className="card-user"  style={{ marginLeft: "30px", width: "40%", height: "150px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3"><a href="/activity">Task 1</a></CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Task Description here
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>


              <Card className="card-user"  style={{ marginLeft: "30px", width: "40%", height: "150px", overflow: "hidden"}}>
                <CardHeader>
                  <CardTitle tag="h3"><a href="/activity">Task 2</a></CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>
                            Task Description here
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
      </>
    );
  }
}

export default ViewTasks;
