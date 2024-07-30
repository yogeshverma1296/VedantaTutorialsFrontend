import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* Navbar Start OK */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <img src="https://raw.githubusercontent.com/yogeshverma1296/VedantaTutorialsFrontend/main/src/img/Vedanta-Tutorials-Logo.png" alt="Vedanta Tutorials Logo" height="73%" loading="lazy" />
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Navbar Collapse Button for Smartphones">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                        <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                        <Link to="/appointment" className="nav-item nav-link">Appointment</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/verify-certificate" className="btn button-bg-red button-color-white py-4 px-lg-5 d-lg-block">VERIFY CERTIFICATE<i className="fa fa-arrow-right ms-3"></i></Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    );
}

export default Navbar;
