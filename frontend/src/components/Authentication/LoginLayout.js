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
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passErr: "",
      emailErr: "",
      redirect: false
    }
  }
  SetRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  componentDidMount() {

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Register' />
    }
  }
  handleChange = ({ target }) => {
    this.setState({ ...this.state, [target.name]: target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    var error = [];
    if (this.state.email == '') {
      this.setState({
        emailErr: 'Please enter your email.',
      });
      error.push("Email error");

    } else {
      this.setState({
        emailErr: '',
      });
    }
    var error = [];
    if (this.state.password == '') {
      this.setState({
        passErr: 'Please enter your password',
      });
      error.push("Password error");
            
      }else{
          this.setState({
              passErr: '',
          });
      }
      // console.log(this.state.password);
    axios.defaults.withCredentials=true;
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/login",this.state).then(res => {
       console.log("logged in :",res);
       sessionStorage.setItem('loggedIn',true);
       this.props.history.push('/admin');
      
      }).catch(error=>{
        console.log(error);
      });
    });

  };

  render(){
  return (
    <div className="App">
             <Card className="card-user" style={{width:"30%",marginLeft:"35%",marginTop:"100px"}}>     		
		        	<Col md="12">
                <CardHeader>
                  <CardTitle tag="h5">Sign in</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>Email address</label>
                          <Input placeholder="Email" name="email" onChange={this.handleChange} type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="12">
                        <FormGroup>
                          <label>Password</label>
                          <Input placeholder="Password" name="password" onChange={this.handleChange}  type="password" />
                        </FormGroup>
                      </Col>
                    </Row>
					          <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit">
                          Login
                        </Button>
                  </div>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <p>Not Registered?
							<a href="/register" style={{ marginLeft: "7px" }}>Create an account</a>

						</p>
                  </div>
                    </Row>

              </Form>
            </CardBody>
          </Col>
        </Card>

      </div>
    );
  }
}
export default Login;