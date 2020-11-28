
import React, { Component } from "react";
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditEmployee extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      setOpen: false,
      name: "",
      email: "",
      team_id: "",
    }
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Team"
            type="email"
            fullWidth
          />
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