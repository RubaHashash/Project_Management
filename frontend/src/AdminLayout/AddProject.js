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

class AddProject extends React.Component {

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

   // SetRedirect = () => {
   //    this.setState({
   //       redirect: true
   //    })
   // }
   // renderRedirect = () => {
   //    if (this.state.redirect) {
   //       return <Redirect to='/HomePage' />
   //    }
   // }

   handleChange = ({ target }) => {
      this.setState({ ...this.state, [target.name]: target.value });
   };

   onSubmit = e => {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      axios.post("/project/add", this.state).then(response => {
         console.log(response);
      });
   };

   handleClose = () => {
      this.setState({
         setOpen: false
      })
      this.props.closeD();
   };

   render() {
      return (
         <>
            <Dialog open={this.props.openD} onClose={this.handleClose} aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
               <DialogContent>

                  <TextField
                     autoFocus
                     margin="dense"
                     id="name"
                     label="Project name.."
                     type="text"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="team"
                     label="Team"
                     type="text"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="description"
                     label="Description"
                     type="text"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="planned_start_date"
                     label="Planned start date"
                     type="date"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="planned_end_date"
                     label="Planned end date"
                     type="date"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="actual_start_date"
                     label="Actual start date"
                     type="date"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="actual_end_date"
                     label="Actual end date"
                     type="date"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="planned_budget"
                     label="Planned budget"
                     type="number"
                     onChange={this.handleChange}
                     fullWidth
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="actual_budget"
                     label="Actual budget"
                     type="number"
                     onChange={this.handleChange}
                     fullWidth
                  />

               </DialogContent>
               <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                     Cancel
                  </Button>
                  <Button onClick={this.onSubmit} color="primary">
                     Add
                  </Button>
               </DialogActions>
            </Dialog>

         </>
      );
   }

}

export default AddProject