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


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name:"",
    password: "",
    isManager:false,
    password_confirmation:"",
    redirect:false
  }
}

  handleChange = ({ target }) => {
    this.setState({ ...this.state, [target.name]: target.value });
  };
  handleIsAdim =()=>{

    this.setState({
      isManager:!this.state.isManager
    })

  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.isManager);
    axios.defaults.withCredentials=true;
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/register",this.state).then(res => {
        sessionStorage.setItem('loggedIn',true);
        if(this.state.isManager){
        this.props.history.push('/company');
        }
        //else employee or manager 
        console.log(res.config['data']);
      });
    });

  };
  render() {
    return(
        <div className="App">
        <Card className="card-user" style={{width:"30%",marginLeft:"35%",marginTop:"60px"}}>     		
               <Col md="12">
           <CardHeader>
             <CardTitle tag="h5">Sign up</CardTitle>
           </CardHeader>
           <CardBody>
             <Form onSubmit={this.onSubmit}>
             <Row>
                 <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Name</label>
                     <Input placeholder="Name" name="name" onChange={this.handleChange} type="text" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
                 <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Email address</label>
                     <Input placeholder="Email" name="email" onChange={this.handleChange}  type="email" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
               <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Password</label>
                     <Input placeholder="Password" name="password" onChange={this.handleChange} type="password" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
               <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Confirm Password</label>
                     <Input placeholder="Password" name="password_confirmation" onChange={this.handleChange} type="password" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
               <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" onChange={this.handleIsAdim} id="customSwitches" />
              <label class="custom-control-label"  for="customSwitches">Admin</label>
            </div>
</Row>
                <Row>
                 <div className="update ml-auto mr-auto">
                   <Button
                     className="btn-round"
                     color="primary"
                     type="submit">
                     Sign Up
                   </Button>
                 </div>
               </Row>
              
               <Row>
                      <div className="update ml-auto mr-auto">
          <p>Already have an account?

							<a href="/login" style={{ marginLeft: "7px" }}>Sign in</a>
                    </p>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Col>
        </Card>

      </div>)
  }
}
export default Register;