import React from 'react'
import HomeBanner from '../HomeBanner/HomeBanner';
import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
        </div>
    )
}

export default Header
