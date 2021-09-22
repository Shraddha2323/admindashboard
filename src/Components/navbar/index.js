import React from "react";
import {  CgMenuGridO } from "react-icons/cg";
import {FaRegUserCircle} from "react-icons/fa";
import {BsBell} from"react-icons/bs";
function Navbar() {
  
    return (

      
    
<div class="nav">
  <a >Sapien Systems</a>

  <div class="center">
  <h3 >Dashboard</h3></div>

  <div class="dropdown"
  style={{
    color: "#fff",
  }}>  <BsBell/>
       <button class="dropbtn"><CgMenuGridO/> 
      <i class="fa fa-caret-down"></i>
    </button>
    
    <div class="dropdown-content">
      <a href="#">View</a>
      <a href="#">Edit</a>
      <a href="#">Delete</a>
      <a href="#">Status</a>
      <a href="#">Seetings</a>
      <a href="#">Share</a>
    </div>
      <FaRegUserCircle/>
   
       </div> 
</div>

  );
};

export default Navbar;
