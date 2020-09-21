import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import Tableapi from "./Tableapi"
import Home from "./Home" 
import Contact from "./Contact"
import MI from "./MI" 
import BMI from "./BMI"
import Post from "./Post"
import TODO from "./TODO"


function App () {
    return(   
            
          <>
            <div className="container-fluid nav_bg">
              <div className="row"> 
                <div className="col-10 mx-auto"> 

                 
                  <Navbar/> 
                  
 
                    <Switch>

                    
                    <Route  path="/Home" component ={Home}/> 
                    <Route  path="/Tableapi" component ={Tableapi}/> 
                    <Route  path="/Contact" component ={Contact}/> 
                    <Route  path="/MI" component ={MI}/> 
                    <Route  path="/BMI" component ={BMI}/> 
                    <Route  path="/Post" component ={Post}/> 
                    <Route  path="/TODO" component ={TODO}/> 





                   </Switch>
                  
                
                </div>
              </div>
            
            </div>
            
          </>

)}
export default App; 








