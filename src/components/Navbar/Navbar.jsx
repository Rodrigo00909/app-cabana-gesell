import React from 'react';
import { NavLink } from "react-router-dom";
import LogoCabañaGesell from '../../assets/cabaña-gesel.svg';

import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-header">
                <div className="navbar-container">
                    <div className="navbar-center">
                        <div className="navbar-logo">
                            <img className="navbar-logo-img" src={LogoCabañaGesell} alt="Logo Cabaña Gesell" />
                        </div>
                        <div className="navbar-menu">
                            <NavLink className="nav-item" to="/Home">Home</NavLink>
                            <NavLink className="nav-item" to="/Reservas">Reservas</NavLink>
                            <NavLink className="nav-item" to="/Login">Login</NavLink>
                            <NavLink className="nav-item" to="/Register">Register</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
