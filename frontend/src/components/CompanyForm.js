
import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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

class CompanyForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: "",
         logo: "",
         email: "",
         date: "",
         address: "",
         city: "",
         country: "",
         phone: "",
         error: "",
         redirect: false
      }
   }

   SetRedirect = () => {
      this.setState({
         redirect: true
      })
   }

   renderRedirect = () => {
      if (this.state.redirect) {
         return <Redirect to='/admin/dashboard' />
      }
   }

   handleChange = ({ target }) => {
      this.setState({ ...this.state, [target.name]: target.value });
   };

   onSubmit = e => {
      e.preventDefault();
      var error = [];
      if (this.state.name === '' || this.state.email === '' || this.state.date === '' || this.state.address === ''
         || this.state.city === '' || this.state.country === '' || this.state.phone === '') {
         this.setState({
            error: 'Please enter all required data!',
         });
         error.push("error");

      } else {
         this.setState({
            error: '',
         });
      }

      axios.defaults.withCredentials = true;
      axios.post("/companies/add", this.state).then(res => {
         console.log("response:", res);
         this.props.history.push('/admin');

      }).catch(error => {
         console.log(error);
      });

      console.log("company:", this.state);


   };



   render() {
      return (
         <>
            <div className="content bg-secondary">
               <Row>
                  <Col md="8" className="m-auto">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">Create Your Company!</CardTitle>
                           <p className="text-danger">{this.state.error}</p>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.onSubmit}>
                              <Row>
                                 <Col className="pr-1" md="4">
                                    <FormGroup>
                                       <label>Company Name</label>
                                       <Input
                                          placeholder="Company name..."
                                          name="name"
                                          type="text"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col className="pl-1" md="4">
                                    <FormGroup>
                                       <label>Logo</label>
                                       <Input
                                          placeholder="Choose company logo..."
                                          type="file"
                                          name="logo"
                                          accept="image/*"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>

                              </Row>
                              <Row>
                                 <Col className="pr-1" md="4">
                                    <FormGroup>
                                       <label htmlFor="exampleInputEmail1">Email address</label>
                                       <Input placeholder="Email..."
                                          type="email"
                                          name="email"
                                          onChange={this.handleChange} />
                                    </FormGroup>
                                 </Col>
                                 <Col className="pl-1" md="4">
                                    <FormGroup>
                                       <label>Date Of Establishment</label>
                                       <Input
                                          placeholder="Date of establishment..."
                                          type="date"
                                          name="date"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="12">
                                    <FormGroup>
                                       <label>Address</label>
                                       <Input
                                          placeholder="Company address..."
                                          type="text"
                                          name="address"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col className="pr-1" md="4">
                                    <FormGroup>
                                       <label>City</label>
                                       <Input
                                          placeholder="City..."
                                          type="text"
                                          name="city"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col className="px-1" md="4">
                                    <FormGroup>
                                       <label>Country</label>
                                       <Input
                                          placeholder="Country..."
                                          type="text"
                                          name="country"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col className="pl-1" md="4">
                                    <FormGroup>
                                       <label>Phone Number</label>
                                       <Input placeholder="Phone number..."
                                          type="number"
                                          name="phone"
                                          onChange={this.handleChange} />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="12">
                                    <FormGroup>
                                       <label>Description</label>
                                       <Input
                                          type="textarea"
                                          name="description"
                                          onChange={this.handleChange}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row>
                                 <div className="update ml-auto mr-auto">
                                    <Button
                                       className="btn-round"
                                       color="primary"
                                       type="submit"
                                    >
                                       Add Company
                                    </Button>
                                 </div>
                              </Row>
                           </Form>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}

export default CompanyForm;
