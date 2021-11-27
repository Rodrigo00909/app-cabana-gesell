import React from 'react';

import BannerCabañaGesell from '../../assets/Banner-Cabana-Gesell.jpg';
import Banner2 from '../../assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
import Banner3 from '../../assets/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg';
import Banner4 from '../../assets/scott-webb-1ddol8rgUH8-unsplash.jpg';

import { ReactComponent as FlechaIz } from '../../assets/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechaDer } from '../../assets/iconmonstr-angel-right-thin.svg';

import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='home-banner'>

            <section className="home-banner-slideshow">
                <div className='home-banner-slide'>
                    <img src={BannerCabañaGesell} alt="" />
                </div>
                <div className='home-banner-slide'>
                    <img src={Banner2} alt="" />
                </div>
                <div className='home-banner-slide'>
                    <img src={Banner3} alt="" />
                </div>
                <div className='home-banner-slide'>
                    <img src={Banner4} alt="" />
                </div>
            </section>

            <div>
                <button>
                    <FlechaIz />
                </button>
                <button>
                    <FlechaDer />
                </button>
            </div>
        </div>
    )
}

export default HomeBanner
{/* <section className="banner-section">
                <div className="header-banner">
                    <img src={BannerCabañaGesell} alt="Banner Cabaña Gesell" className="header-img-banner" />
                </div>
            </section> */}