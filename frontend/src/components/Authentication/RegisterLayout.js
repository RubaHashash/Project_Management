import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
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

class Register extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email: "",
      name:"",
    password: "",
    password_confirmation:"",
    redirect:false
  }
  }
  SetRedirect=()=>{
  this.setState({
    redirect:true
  })
  }
  renderRedirect = ()=>{
  if(this.state.redirect){
    return <Redirect to='/HomePage' />
  }
  } 
  handleChange = ({ target }) => {
    this.setState({ ...this.state, [target.name]: target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    axios.defaults.withCredentials=true;
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/register",this.state).then(res => {
        sessionStorage.setItem('loggedIn',true);
        this.props.history.push('/HomePage');
        console.log(res.config['data']);
      });
    });
  };
  render(){
    return (
        <div className="App">
        <Card className="card-user" style={{width:"30%",marginLeft:"35%",marginTop:"60px"}}>     		
               <Col md="12">
           <CardHeader>
             <CardTitle tag="h5">Sign up</CardTitle>
           </CardHeader>
           <CardBody>
             <Form>
             <Row>
                 <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Name</label>
                     <Input placeholder="Name" type="text" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
                 <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Email address</label>
                     <Input placeholder="Email" type="email" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
               <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Password</label>
                     <Input placeholder="Password" type="password" />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
               <Col className="pl-1" md="12">
                   <FormGroup>
                     <label>Confirm Password</label>
                     <Input placeholder="Password" type="password" />
                   </FormGroup>
                 </Col>
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