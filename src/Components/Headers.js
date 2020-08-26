import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'; 
import Logo from "../images/sources-homepage/logo/logo.png";
import "./App.css";





const Headers = () => {
  
    
    
        return(
            <Navbar  className="bg-light shadow-sm ">
                <Navbar.Brand ><img src={ Logo } className="Logo" /></Navbar.Brand>
                <Nav >
                <NavDropdown title="Menu" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1"><a href="#HomeVersion">Versions</a></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Couleurs </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Jantes </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Scellerie </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.5">Equipement </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.6">Règlement </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar>
        )
    }

export default Headers;
