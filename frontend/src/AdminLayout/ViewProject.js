import React from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

class ViewProject extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         open: false,
         setOpen: false,
         name: "",
         actual_start_date: "",
         actual_end_date: "",
         planned_start_date: "",
         planned_end_date: "",
         description: "",
         planned_budget: "",
         actual_budget: "",
         team_id: "",
      }
   }
   handleClose = () => {
      this.setState({
         setOpen: false
      })
      this.props.closeD();
   };

   style = () => { }

   render() {
      return (
         <>
            <Dialog open={this.props.openD} onClose={this.handleClose} aria-labelledby="form-dialog-title">
               <Card>
                  <DialogTitle id="form-dialog-title"><h5>{this.props.project.name}</h5></DialogTitle>
                  <DialogContent className="content">

                     <h6>Team</h6>
                     <DialogContentText className="px-3">{this.props.project.team}</DialogContentText>
                     <h6>Description</h6>
                     <DialogContentText className="px-3">{this.props.project.description}</DialogContentText>

                     <div className="d-flex">
                        <div style={{ marginRight: "50px", textAlign: "center" }}>
                           <h6>Planned Start Date</h6>
                           <DialogContentText>{this.props.project.planned_start_date}</DialogContentText>
                        </div>
                        <div style={{ marginRight: "50px", textAlign: "center" }}>
                           <h6>Actual State Date</h6>
                           <DialogContentText>{this.props.project.actual_start_date}</DialogContentText>
                        </div>
                     </div>
                     <div className="d-flex">
                        <div style={{ marginRight: "70px", textAlign: "center" }}>
                           <h6>Planned End Date</h6>
                           <DialogContentText>{this.props.project.planned_end_date}</DialogContentText>

                        </div>
                        <div style={{ marginRight: "50px", textAlign: "center" }}>
                           <h6>Actual End Date</h6>
                           <DialogContentText>{this.props.project.actual_end_date}</DialogContentText>
                        </div>
                     </div>
                     <div className="d-flex">
                        <div style={{ marginRight: "90px", textAlign: "center" }}>
                           <h6>Planned Budget</h6>
                           <DialogContentText>{this.props.project.planned_budget}</DialogContentText>

                        </div>
                        <div style={{ marginRight: "50px", textAlign: "center" }}>
                           <h6>Actual Budget</h6>
                           <DialogContentText>{this.props.project.actual_budget}</DialogContentText>
                        </div>
                     </div>

                  </DialogContent>

               </Card>
            </Dialog>

         </>
      );
   }

}

export default ViewProject