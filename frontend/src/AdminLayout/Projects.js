import React from "react";
import axios from "axios";
import ViewProject from "AdminLayout/ViewProject"
import AddProject from "AdminLayout/AddProject"
import EditProject from "AdminLayout/EditProject"
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
class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         projects: [],
          setAddOpen: false,
         setViewOpen: false,

         setEditOpen: false,
         project:""


      }
   }
   componentDidMount() {
      this.getProjects()
   }
   getProjects = () => {
      axios.defaults.withCredentials = true;
      axios.get('/api/projects').then((response) => {
         // console.log("response", response.data.data);
         this.setState({
            projects: response.data.data
         });
      });
   }
   Status = (start, end) => {
      let src;
      if (end) {
         src = require("assets/img/done.png")
      }
      else if (start !== null && end === null) {
         src = require("assets/img/inProgress.png")
      }
      else if (start === null) {
         src = require("assets/img/loading.png")
      }
      return src
   }
   Color = (start, end) => {
      //console.log('start',start,'end',end)
      let color;
      if (end) {
         color = "bg-success"
      }
      else if (start !== null && end === null) {
         color = "bg-warning"
      }
      else if (start === null) {
         color = "bg-danger"
      }
      return color
   }
   handleClickOpen = () => {
      this.setState({ setAddOpen: true })
   }
   closeDialog = () => {
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
   openViewDialog = (project) => {
      if (this.state.setViewOpen) {
         return <ViewProject openD={this.state.setViewOpen} closeD={this.closeViewDialog} project={project} />
      }
   }
   Edit = (end_date) => {
      if (end_date === null)
         return <i className="nc-icon nc-ruler-pencil" style={{ marginLeft: "90px" }} onClick={this.handleEditClickOpen} />
   }
   openEditDialog = (project) => {
      if (this.state.setEditOpen) {
         return <EditProject openD={this.state.setEditOpen} closeD={this.closeEditDialog} project={project} />
      }
   }

   // DeleteProject =(e,project)=>{
   //    // console.log(project.id)
   //    e.preventDefault();
   //    let Projectid={ id: project.id}
   //    axios.defaults.withCredentials = true;
   //    axios.post("/api/projects/delete",Projectid).then(response => {
   //       console.log(response);
   // })
   // }


   render() {
      if (this.state.setAddOpen) {
         return <AddProject openD={this.state.setAddOpen} closeD={this.closeDialog} />
      }
      return (
         <>
            <div className="content">
               <Row>
                  <div style={{ marginLeft: "85%" }}>
                     <Button onClick={this.handleClickOpen} >
                        Add Project
                     </Button>
                  </div>
               </Row>
               <Row>
                  <br></br>
               </Row>
               <Row>
                  {this.state.projects.map(project => (
                     < Col md="4" key={project.id} >

                        {this.openViewDialog(project)}
                        < Card className={this.Color(project.actual_start_date, project.actual_end_date)}>
                           <CardHeader>
                              <CardTitle tag="h4">
                                 <div className="d-flex">
                                    {project.name}
                                    {this.Edit(project.actual_end_date)}
                                    {this.openEditDialog(project)}

                                    {/* <i  onClick={this.DeleteProject(project)} className="nc-icon nc-simple-remove" /> */}

                                   

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
                                                src={this.Status(project.actual_start_date, project.actual_end_date)}
                                             />
                                          </div>
                                       </Col>
                                       <Col md="7" xs="7">
                                          {project.team.name} <br />
                                          <span className="text-muted">
                                             <small>{project.project_description}</small>
                                          </span>
                                       </Col>
                                    </Row>
                                 </li>
                              </ul>
                           </CardBody>
                        </Card>
                     </Col>
                  ))}
               </Row>
            </div >
         </>
      );
   }
}
export default Projects;