import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

// Import your image assets
import b1 from './images/b1.webp';
import cakebanner from './images/cake banner.webp';
import b5 from './images/b5.webp';
import b6 from './images/b6.webp';
import ganesh from './images/ganesh.webp';

const About = () => {
    return (
        <div>
            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={b1} className="d-block w-100" alt="Banner 1" style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={cakebanner} className="d-block w-100" alt="Banner 2" style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b5} className="d-block w-100" alt="Banner 3" style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={b6} className="d-block w-100" alt="Banner 4" style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={ganesh} className="d-block w-100" alt="Banner 5" style={{ height: '500px' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
    );
}

export default About;

