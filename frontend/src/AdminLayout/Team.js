import React from "react";
import axios from "axios";
import ViewTeam from "AdminLayout/ViewTeam"
import AddTeam from "AdminLayout/AddTeam"
import {Link} from 'react-router-dom';


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

class Teams extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         teams: [],
         setAddOpen: false,
         setViewOpen: false,
         setEditOpen: false

      }
   }

   componentDidMount() {
      this.getTeams()
   }

   getTeams = () => {
      axios.defaults.withCredentials = true;
      axios.get('/api/teams').then((response) => {
         console.log("Teams DB", response);

         this.setState({
            teams: response.data.data
         });
      });
   }
  
   handleClickOpen = () => {
      this.setState({ setAddOpen: true })
   }

   closeDialog = () => {
      this.getTeams();
      this.setState({ setAddOpen: false });
   };

   handleViewClickOpen = () => {
      this.setState({ setViewOpen: true })
   }

   handleEditClickOpen = () => {
      this.setState({ setEditOpen: true })
   }

   closeViewDialog = () => {
      this.setState({ setViewOpen: false });
   };

   closeEditDialog = () => {
      this.setState({ setEditOpen: false });
   };

   

   Edit = (end_date) => {
      if (end_date === null)
         return <i className="nc-icon nc-ruler-pencil" style={{ marginLeft: "90px" }} onClick={this.handleEditClickOpen} />

   }

   DeleteTeam =(id)=>{
      // console.log(project.id)
      //e.preventDefault();
   //   / let TeamId={ id: id}
   //    axios.defaults.withCredentials = true;
   //    axios.post("/api/teams/delete",TeamId).then(response => {
   //       console.log(response);
   // })
   }

   openViewDialog = (team) => {
      if (this.state.setViewOpen) {
         return <ViewTeam openD={this.state.setViewOpen} closeD={this.closeViewDialog} team={team} />
      }
   }

   render() {
      if (this.state.setAddOpen) {
         return <AddTeam openD={this.state.setAddOpen} closeD={this.closeDialog} />
      }

      return (
         <>
            <div className="content">
               <Row>
                  <div style={{ marginLeft: "85%" }}>
                     <Button onClick={this.handleClickOpen} >
                        Add Team
                     </Button>

                  </div>
               </Row>
               <Row>
                  <br></br>
               </Row>
               <Row>
                  {this.state.teams.map(team => ( 

                        < Col md="4" key={team.id}  style={{ width:"40%" }}>
                        <Link key={team.id} to={`/viewteam/${team.id}`}>

                        < Card className="bg-info ">
                           <CardHeader>
                              <CardTitle tag="h4">
                                 <div className="d-flex">
                                 {team.name}
                                 </div>
                              </CardTitle>
                           </CardHeader>
                           <CardBody onClick={this.handleViewClickOpen}>
                              <ul className="list-unstyled team-members">
                                 <li>
                                    <Row>
                                       <Col md="2" xs="2">
                                          <div className="avatar">
                                             <img
                                                alt="..."
                                                className="img-circle img-no-padding img-responsive"
                                                //src={this.Status(project.actual_start_date, project.actual_end_date)}
                                             />
                                          </div>
                                       </Col>
                                       <Col md="7" xs="7">
                                          {team.name} <br />
                                       </Col>
                                    </Row>
                                 </li>
                              </ul>
                           </CardBody>
                        </Card>
                        </Link>

                     </Col>
                  ))}

               </Row>
            </div >
         </>
      );
   }
}

export default Teams;