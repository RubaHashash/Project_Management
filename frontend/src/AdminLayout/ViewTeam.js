import React from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AdminRoutes from "routes/AdminRoutes";

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
import Sidebar from "components/Sidebar/Sidebar";

class ViewTeam extends React.Component {

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



   handleClickOpen = () => {
      this.setState({ setAddOpen: true })
   }

   render() {if (this.state.setAddOpen) {
  /*    return <AddMember openD={this.state.setAddOpen} closeD={this.closeDialog} /> */
   }

   return (
      <>
      <Sidebar
          {...this.props}
          routes={AdminRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />

         <div className="content">
            <Row>
               <div style={{ marginLeft: "85%" }}>
                  <Button onClick={this.handleClickOpen} >
                     Add Member
                  </Button>

               </div>
            </Row>
            <Row>
               <br></br>
            </Row>
            <Row>
               

            </Row>
         </div >
      </>
   );
   }

}

export default ViewTeam