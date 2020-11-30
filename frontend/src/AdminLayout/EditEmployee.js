
import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

class EditEmployee extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      setOpen: false,
      name: "",
      email: "",
      team_id: "",
      teams:[],
    }
  }  

  componentDidMount() {
    this.getTeams();
  }


  getTeams = () => {
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
  
    handleClose = () => {
      this.setState({
        setOpen: false
      })
      this.props.closeD();
    };

   
    
 render(){ 
    return (
      <>
        <Dialog open={this.props.openD} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
        <DialogContent>
        <Select className="custom-select" id="inputGroupSelect02" name="team_id" value={this.state.team} 
            label="Choose a team" onChange={this.handleChange}>

            <option value="">Choose...</option>
            {
              this.state.teams.map((item)=>{
              return <option value={item.id}
                key={item.id} >{item.name}</option>
                })
              }
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
  }
}

export default EditEmployee;