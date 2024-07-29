import React from "react";

const Topbar = () => {
    return (
        <>
            {/* Topbar Start OK */}
            <div className="container-fluid bg-black text-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-map-marker-alt color-red me-2"></small>
                            <small>Near Mata Ishwar Devi Chowk, Vikas Nagar, Rajpura</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <small className="far fa-clock color-red me-2"></small>
                            <small>Mon - Sat : 8.00 AM - 8.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <i className="fa fa-phone-alt color-red me-2"></i>
                            <a href="tel:9463051615" style={{ marginRight: '10px' }}>
                                <strong className="color-red">+91 9463051615</strong>
                            </a>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            {/* email */}
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary color-red" href="mailto:vedantatutorials2020@gmail.com" target="_blank" aria-label="Vedanta Tutorials Email">
                                <i className="fas fa-envelope"></i>
                            </a>
                            {/* fa-facebook-f */}
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary color-red" href="https://www.facebook.com/profile.php?id=100063998832199" target="_blank" aria-label="Vedanta Tutorials Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            {/* fa-whatsapp */}
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary color-red" href="https://api.whatsapp.com/send?text=I_want_to_get_coaching&phone=919463051615" target="_blank" aria-label="Vedanta Tutorials Whatsapp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            {/* youtube */}
                            <a className="btn btn-square btn-link rounded-0 color-red" href="https://www.youtube.com/watch?v=pJy1mEaqiJE&t=8s" target="_blank" aria-label="Vedanta Tutorials Youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
        </>
    );
}

export default Topbar;
