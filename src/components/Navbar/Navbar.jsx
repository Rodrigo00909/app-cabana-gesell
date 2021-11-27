import React from 'react';

import LogoCabañaGesell from '../../assets/LogoText-Cabana-Gesell2.png';

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
                            <a href="#">Home</a>
                            <a href="#">Contact</a>
                            <a href="#">About</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
