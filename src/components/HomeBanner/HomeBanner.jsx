import React, { useEffect, useRef } from 'react';

import BannerCabañaGesell from '../../assets/FotosBanner/IMG_6426.JPEG';
import Banner2 from '../../assets/FotosBanner/IMG_6426.JPEG';
import Banner3 from '../../assets/FotosBanner/IMG_6662.JPEG';
import Banner4 from '../../assets/FotosBanner/IMG_6667.JPEG';

import { ReactComponent as FlechaIz } from '../../assets/iconmonstr-angel-left-thin.svg';
import { ReactComponent as FlechaDer } from '../../assets/iconmonstr-angel-right-thin.svg';

import './HomeBanner.css';

const HomeBanner = () => {

    /* Hook useRef */
    // Guarda el valor en una referencia (y no estado) para no perder la posición de la foto x mas q se renderize la app
    const slideshow = useRef(null);

    const intervaloSlideshow = useRef(null);
    /* // Hook useRef */

    const RightSlide = () => {
        /* console.log(slideshow.current); */ // Current (examinar propiedad consolelog)
        //Comprobar q slideshow tenga elementos
        if (slideshow.current.children.length > 0) {

            //primer hijo
            const firstElement = slideshow.current.children[0];

            slideshow.current.style.transition = `1000ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`; // se desplaza 1000px

            const transicion = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`; // Regresa slide a la pos 0

                slideshow.current.appendChild(firstElement); // manda la foto 1 al final

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            // ejecuta cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transicion);

        }
    }

    const LeftSlide = () => {
        if (slideshow.current.children.length > 0) {

            const index = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[index];

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = `none`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `1000ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);

        }
    }

    /* Hook useEffect */
    /*useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            RightSlide();
        }, 9000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                RightSlide();
            }, 9000);
        });
    }, []); // Se refrezca cada vez que ocurra una act
    /* // Hook useEffect */

    return (
        <div className='home-banner'>

            <section className="home-banner-slideshow" ref={slideshow}>
                <div className='home-banner-slide'>
                    <img src={BannerCabañaGesell} alt="" />
                    {/* <div className="home-text-slide">
                        <p>Texto de Prueba</p>
                    </div> */}
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

            <div className='home-banner-controls'>
                <button onClick={LeftSlide} className='home-banner-buttons home-button-iz'>
                    <FlechaIz />
                </button>
                <button onClick={RightSlide} className='home-banner-buttons home-button-der'>
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