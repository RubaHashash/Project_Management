import React from "react";
import axios from "axios";
import  EditEmployee from "./EditEmployee";
import Select from '@material-ui/core/Select';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class ManageEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state={
      setOpen: false,
      employee_list: [],
      teams:[],

    }
  }


  componentDidMount(){
    this.getEmployee();

  }

  getEmployee = ()=>{
    axios.get('/api/employees')
    .then(response=>{
      console.log(response);
        this.setState({
            employee_list:response.data,
        });
    });
}


  handleClickOpen = () => {
    this.setState({setOpen:true});
  };

  closeDialog = () => {
    this.setState({setOpen: false});
  };


  render() {
    return (
      <>
      if ({this.state.setOpen}) {
              <EditEmployee openD={this.state.setOpen} closeD={this.closeDialog}/>
      }
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Managers Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Team</th>
                        <th>Projects</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Oud-Turnhout</td>
                        <td>
                            <i className="nc-icon nc-ruler-pencil" style={{marginLeft: "10px", marginRight: "20px"}}
                                  onClick={this.handleClickOpen}/>
                            <i className="nc-icon nc-simple-remove" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Employees Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Team</th>
                        <th>Projects</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                          
                          
                    {
                        this.state.employee_list.map(emp=>{
                        return(
                            <tr key={emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.team_id}</td>
                                    <td>{emp.team_id}</td>

                                    <td>
                                    <a className="nc-icon nc-ruler-pencil" style={{marginLeft: "10px", marginRight: "20px"}}
                                          onClick={this.handleClickOpen}/>
                                    <a className="nc-icon nc-simple-remove" />
                                    </td>
                            </tr>
                        )

                        })

                        }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ManageEmployee;
