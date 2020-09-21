import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Navbar =()=>{
    return (  

        <>
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded ">
        <strong className="brand-name">Jackpack</strong>
  <NavLink className="navbar-brand" to=""></NavLink>
  <button className="navbar-toggler" type="button"   data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      
      <li className="nav-item "> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/Home">Home</NavLink>
      </li>
      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/Tableapi">Table</NavLink>
      </li>

      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      
      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/MI">material ui</NavLink>
      </li>

      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/BMI">BMI </NavLink>
      </li>

      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/Post">POST </NavLink>
      </li>

      <li className="nav-item"> 
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/TODO">TOdO </NavLink>
      </li>
   </ul>

   
  </div>
</nav>


        </>
    )
}
export default Navbar;
