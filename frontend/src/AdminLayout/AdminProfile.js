
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

class User extends React.Component {
  
  constructor(props){
      super(props);
      this.state={
        teams:[],
        name:"",
        email:"",
        companyName:"",
        companyId:"",
            companyAddress:"",
            companyCity:"",
            companyCountry:"",
            companyCreatedAt:"",
            companyEmail:"",
            companyDesc:"",
            companyNum:""
  }
}
  
  componentDidMount() {
     axios.defaults.withCredentials=true;
       axios.get('/api/user').then((response)=>{
          this.setState({
            name:response.data.name,
            email:response.data.email
          })
       })
    this.getTeams()
    this.getCompany();
  }

  getTeams = ()=>{
    axios.defaults.withCredentials=true;
       axios.get('/api/teams').then((response)=>{
          return response.data.data
        }).then((team)=>{
          // console.log("reponse",team);

          this.setState({
           teams:team});
        });
  } 
  getCompany=()=>{
    axios.defaults.withCredentials=true;
       axios.get('/api/companies').then((response)=>{
          // console.log(response.data)
          return response.data[0]
        }).then((company)=>{
          // console.log(company)
          this.setState({
           companyName:company.name,
          companyAddress:company.address,
          companyCity:company.city,
          companyCountry:company.country,
          companyCreatedAt:company.date_of_establishment,
          companyEmail:company.email,
          companyNum:company.phone_number,
          companyId:company.id,
          companyDesc:company.description
        });
        });
  }
  handlechangeall = (event) =>{
  this.setState ( { [event.target.name] :event.target.value  } )
}

  updateCompany=()=>{
    let formData={
      id:this.state.companyId,
      name:this.state.companyName,
      address:this.state.companyAddress,
      city:this.state.companyCity,
      country:this.state.companyCountry,
      email:this.state.companyEmail,
      phone_number:this.state.companyNum,
      description:this.state.companyDesc,
      date_of_establishment:this.state.companyCreatedAt
    }
    axios.defaults.withCredentials=true;
       axios.post('/api/companies/edit',formData).then((response)=>{
        // console.log(response);
      })
  }
editProfile=()=>{
  let formData1={
    name:this.state.name,
    email:this.state.email
  }
    axios.defaults.withCredentials=true;
       axios.post('/api/users/edit',formData1).then((response)=>{
        console.log(response);
      })
}
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      
                      <h5 className="title">Admin</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                    <h3>{this.state.name}</h3>
                    <p>{this.state.email}</p>
                 </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Teams</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                  {
                      this.state.teams.map(team=>{
                        return(
                          <li>
                          <Row>
                            <Col md="2" xs="2">
                              <div className="avatar">
                                <img
                                  alt="..."
                                  className="img-circle img-no-padding img-responsive"
                                  src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                                />
                              </div>
                            </Col>
                            <Col md="7" xs="7">
                              {team.name} <br />
                            </Col>
                          </Row>
                        </li>
                        )

                        })
                  }
  

                  </ul>
                </CardBody>
              </Card>
            
            </Col>
      
            <Col md="8">
              <Row>
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue={this.state.companyName}
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue={this.state.name}
                            name="name"
                            onChange={this.handlechangeall}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" defaultValue={this.state.email}
                            name="email"
                            onChange={this.handlechangeall} type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <FormGroup style={{marginLeft:"20px"}}>
                      <label>Change profile picture</label>
                    <Input type="file" accept="image/png, image/jpg" name="image" />
                    </FormGroup>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="4">
                      <a href="#" style={{marginLeft:"20px"}}> Change Password </a>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick={this.editProfile}
                        >
                          Update 
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Row>
              <Row>
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Company Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company name</label>
                          <Input
                            defaultValue={this.state.companyName}
                            // disabled
                            placeholder="Company"
                            name="companyName"
                            onChange={this.handlechangeall}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Foundation Date</label>
                          <Input
                            defaultValue={this.state.companyCreatedAt}
                            placeholder="date"
                            name="date_of_establishment"
                            onChange={this.handlechangeall}
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{marginLeft:"2px"}}>
                    <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue={this.state.companyAddress}
                            name="companyAddress"
                            onChange={this.handlechangeall}
                            placeholder="address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={this.state.companyCountry}
                            name="companyCountry"
                            onChange={this.handlechangeall}
                            placeholder="county"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={this.state.companyCity}
                            name="companyCity"
                            onChange={this.handlechangeall}
                            placeholder="city"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row style={{marginLeft:"2px"}}>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" name="companyEmail"
                            onChange={this.handlechangeall} defaultValue={this.state.companyEmail} type="email" />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Phone number</label>
                          <Input
                            defaultValue={this.state.companyNum}
                            name="companyNum"
                            onChange={this.handlechangeall}
                            placeholder=""
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Logo</label>
                          <Input
                            type="file"
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
                          onClick={this.updateCompany}
                        >
                          Update 
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Row>
              
            </Col>

          </Row>
        </div>
      </>
    );
  }
}

export default User;
