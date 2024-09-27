// src/components/Navbar.jsx  
import React from 'react';  
import { NavLink } from 'react-router-dom';  
import './Navbar.css'; // Optional: Import a CSS file for styling  

const Navbar = () => {  
  return (  
    <nav className="navbar">  
      <NavLink to="/" exact activeClassName="active">  
        Product List  
      </NavLink>  
      <NavLink to="/crud" activeClassName="active">  
        Manage Products  
      </NavLink>  
      <NavLink to="/login" activeClassName="active">  
        Login  
      </NavLink>  
      <NavLink to="/register" activeClassName="active">  
        Register  
      </NavLink>  
    </nav>  
  );  
};  

export default Navbar;