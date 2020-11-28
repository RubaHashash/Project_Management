/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import  EditEmployee from "AdminLayout/EditEmployee";
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
    }
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
                            <i className="nc-icon nc-ruler-pencil" style={{marginLeft: "10px", marginRight: "20px"}}/>
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
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Oud-Turnhout</td>
                        <td>
                            <a className="nc-icon nc-ruler-pencil" style={{marginLeft: "10px", marginRight: "20px"}}
                              onClick={this.handleClickOpen}/>
                            <a className="nc-icon nc-simple-remove" />
                        </td>
                      </tr>
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
