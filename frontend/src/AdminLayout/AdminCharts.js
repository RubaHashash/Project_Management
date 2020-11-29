import React from 'react';
import {Bar,  Doughnut,  Line,Pie} from 'react-chartjs-2';
import axios from 'axios';
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
    ButtonToggle,
  } from "reactstrap";
class AdminChart extends React.Component{
      constructor(props) {
    super(props);
    this.state = {
      name: "",
      countEmp: "",
      Teamname:"",
      countProjects:"",
      Projectname:"",
     BudgetOfProj:""
    }
}
    employeePerTeam = ()=>{
           axios.get('/api/user').then(response=>{
        axios.get('/api/teams/employees')
        .then(response=>{
          console.log(response.data);
            const Names = response.data.map((data2) => { return data2.name })
            const Num = response.data.map((data2) => { return data2.COUNT })
            this.setState({name:Names});
            this.setState({countEmp:Num}); 
                
        })
    })
    }
    BudgetOfProjects=()=>{
         axios.get('/api/user').then(response=>{
        axios.get('/api/projects')
        .then(response=>{
          console.log(response.data.data);
            const Names = response.data.data.map((data2) => { return data2.name })
            const BudgetOfProj = response.data.data.map((data2) => { return data2.actual_budget })
            this.setState({Projectname:Names});
            this.setState({BudgetOfProj:BudgetOfProj}); 
                
        })
    })
    }
    projectsOfTeam = ()=>{
         axios.get('/api/user').then(response=>{
        axios.get('/api/teams/projects')
        .then(response=>{
          console.log(response.data);
            const NamesOfTeams = response.data.map((data2) => { return data2.name })
            const NumofProj = response.data.map((data2) => { return data2.COUNT })
            this.setState({Teamname:NamesOfTeams});
            this.setState({countProjects:NumofProj}); 
                
        })
    })
    }
     componentDidMount() {
     this.employeePerTeam();
     this.projectsOfTeam();
     this.BudgetOfProjects();
    }
  dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: this.props.Teamname,
      datasets: this.state.countProjects
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};
    render() {
    return (
        <div className="content">
            <Row>
        <Card style={{width:"100%"}}>
                 <CardHeader>
                  <CardTitle tag="h5">Employees Per Team</CardTitle>
               </CardHeader>
                <CardBody style={{width:"60%",marginLeft:"20%"}}>
                <Pie
                  data = {{
                      labels:this.state.name,
                      datasets :[{
                          label: 'Employees',
                          data:this.state.countEmp,
                          backgroundColor: [
                              //vert
                              'rgba(32, 161, 96,0.8)',
                              //orange
                              'rgba(245, 179, 56,0.8)',
                              //rouge
                              'rgba(240, 120, 65,1)',
                              //blue
                              'rgba(20, 201, 192,1)',
                              //light blue
                              'rgba(51, 102, 204,1)'
                          ],
                          borderWidth: 1
                      }]
                  }}
              />
               </CardBody>
                
              </Card>
            </Row>
            <Row>
              <Card style={{width:"100%"}}>
                 <CardHeader>
                  <CardTitle tag="h5">Number of Projects Per Team</CardTitle>
               </CardHeader>
                <CardBody style={{width:"60%",marginLeft:"20%"}}>
                <Bar
                  data = {{
                      labels:this.state.Teamname,
                      datasets :[{
                          label: 'Projects',
                          data:this.state.countProjects,
                          backgroundColor: [
                              //vert
                              'rgba(32, 161, 96,0.8)',
                              //orange
                              'rgba(245, 179, 56,0.8)',
                              //blue
                              'rgba(20, 201, 192,1)',
                              //beige
                              'rgba(102, 0, 0,0.7)',
                              //light blue
                              'rgba(51, 102, 204,1)'
                          ],
                          borderWidth: 1,
                        
                      }],
                      
                  }
                }
              />
               </CardBody>
                
              </Card>
              </Row>

              <Row>
              <Card style={{width:"100%"}}>
                 <CardHeader>
                  <CardTitle tag="h5">Budget of Project</CardTitle>
               </CardHeader>
                <CardBody style={{width:"60%",marginLeft:"20%"}}>
                <Line
                  data = {{
                      labels:this.state.Projectname,
                      datasets :[{
                          label: 'Projects',
                          data:this.state.BudgetOfProj,
                          backgroundColor: [
                              //vert
                              'rgba(32, 161, 96,0.8)',
                              //orange
                              'rgba(245, 179, 56,0.8)',
                              //blue
                              'rgba(20, 201, 192,1)',
                              //beige
                              'rgba(102, 0, 0,0.7)',
                              //light blue
                              'rgba(51, 102, 204,1)'
                          ],
                          borderWidth: 1,
                        
                      }],
                      
                  }
                }
              />
               </CardBody>
                
              </Card>
              </Row>
              </div>
      )
       
    }
}
export default AdminChart;
