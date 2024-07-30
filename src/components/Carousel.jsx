import React from "react";
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
      {/* Carousel Start OK */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* carousel-item 1 */}
            <div className="carousel-item active">
              <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="w-100"
                srcSet="
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_200.webp 200w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_480.webp 480w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_677.webp 677w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_871.webp 871w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1078.webp 1078w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1378.webp 1378w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1282.webp 1282w,
                        https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1400.webp 1400w"
                src="https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1400.webp"
                alt="Vedanta Tutorials Front Image"
                loading="lazy"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">
                        Vedanta Tutorials - Best Coaching Center in Rajpura
                      </h1>
                      <Link to="/about" className="btn button-bg-red button-color-white py-sm-3 px-sm-5">About Us</Link>
                        <Link to="/courses" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel-item 2 */}
            <div className="carousel-item">
              <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="w-100"
                srcSet="
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_200.webp 200w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_480.webp 480w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_677.webp 677w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_871.webp 871w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1078.webp 1078w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1378.webp 1378w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1282.webp 1282w,
                    https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1400.webp 1400w"
                src="https://raw.githubusercontent.com/yogeshverma1296/vedanta-tutorials/main/img/vedanta-front-webp_nyo5ag_c_scale%2Cw_1400.webp"
                alt="Vedanta Tutorials Front Image"
                loading="lazy"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">
                        Vedanta Tutorials - Best Coaching Center in Rajpura
                      </h1>
                      <Link to="/about" className="btn button-bg-red button-color-white py-sm-3 px-sm-5">About Us</Link>
                        <Link to="/courses" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
};

export default Carousel;
