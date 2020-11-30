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

class AddTeam extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         open: false,
         setOpen: false,
         name: "",
         company_id: 0,
         manager_id: 0

      }
   }
   getTeams(){
    axios.defaults.withCredentials=true;
        axios.get('/api/teams')
         .then(response => {
            console.log(response.data.data)
              this.setState({
                  teams: response.data.data,
              });
      })
      .catch(error => {
          if (error.response) {
              console.log(error.response);
            }
      });
  }

 componentDidMount() {
  this.getTeams();
   this.getUser();
  }

   handleChange = ({ target }) => {
      this.setState({ ...this.state, [target.name]: target.value });
   };

   onSubmit = e => {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      console.log(this.state)
      axios.post("/api/teams/add", this.state).then(response => {
         console.log(response);
      });
      this.props.closeD();

   };
   getUser=()=>{
       axios.defaults.withCredentials = true;
      // console.log(this.state)
      axios.get("/api/user").then(response => {
         console.log(response);
         this.setState({
            company_id:response.data.company_id
         })
   })
   }
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
               <DialogTitle id="form-dialog-title">Add Team</DialogTitle>
               <DialogContent>

                  <TextField
                     autoFocus
                     margin="dense"
                     name="name"
                     label="Team name.."
                     type="text"
                     onChange={this.handleChange}
                     fullWidth
                  />
              {/*}     <select  
                     name="Manager_id" 
                      value={this.state.team}
                      label="Choose a team"
                     onChange={this.handleChange}
                     >
                     <option value="">team</option>
                      {
                        this.state.users.map((user)=>{
                        return <option value={item.id}
                         key={item.id} >{item.name}</option>
                         })
                       }
                     </select> */}

                  <TextField
                     autoFocus
                     margin="dense"
                     name="manager_id"
                     label="Manager id"
                     type="text"
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

export default AddTeam