// import React, {Component} from 'react';

// class Tableapi extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             items:[],
            
//         }
//     }

//     componentDidMount(){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=> res.json())
//         .then(json=>{
//             this.setState({
                
//                 items: json,
//             })
//         })
//     }
//     render(){
//         var { items}=this.state;
        
      
//         return(
//             <table style={{ border: '1px solid black'}}>
//                    <tr>
//                         <th>name</th>
//                         <th>email</th>
//                         <th>phone no.</th>
//                    </tr> 
                         
//                        {items.map(item=>(
//                          <tr key={item.id}>  
//                              <td>{item.name}</td>  
//                               <td> {item.email}</td>
//                               <td> {item.phone}</td>

//                             </tr>
//                        ))
//                        };
                
                
//              </table>
                 
            
//         )
//     }}

// export default Tableapi;

// import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// class Tableapi extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             items:[],
            
//         }
        
//     }

//     componentDidMount(){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=> res.json())
//         .then(json=>{
//             this.setState({
                
//                 items: json,
//             })
//         })
//     }

//     render(){
//         var { items}=this.state;
        
      
        
        
//         return (
//             <TableContainer >
//               <Table  aria-label="simple table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>name</TableCell>
//                     <TableCell >email</TableCell>
//                     <TableCell >phone</TableCell>
                   
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {items.map((item) => (
//                     <TableRow key={item.id}>
//                       <TableCell component="th" scope="row">
//                         {item.name}
//                       </TableCell>
//                       <TableCell>{item.email}</TableCell>
//                       <TableCell>{item.phone}</TableCell>
//                       </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
            
//           );
//     }}

// export default Tableapi;


import React,{useState,useEffect} from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

function Tableapi() {
  const [state, setstate] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      console.log(res)
      setstate(res.data)
    })
  })


  return (
                <TableContainer >
              <Table  aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell >email</TableCell>
                    <TableCell >phone</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                  state.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
         
          );
    }

export default Tableapi;
    
      

