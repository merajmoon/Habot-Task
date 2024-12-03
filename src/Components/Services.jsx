import React from 'react';
import '../assets/css/services.css';

const Services = () => {
    return (
        <section className="services-section mb-5 bg-white text-white">
            <div className="container services-container"  data-aos="zoom-in">
                <div className="row align-items-center">
                 
                    <div className="col-md-6 col-sm-12 py-5 text-center" data-aos="fade-up">
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/IZLp-TZyDkQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

           
                    <div className="col-md-6 col-sm-12 py-5"  data-aos="fade-up"   data-aos-delay="100">
                        <div className="text-section">
                            <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-3">
                                <h3 className="buyer-title text-orange">Buyer</h3>
                                <h3 className="supplier-title text-white mx-md-5 ms-3 ms-md-5">Supplier</h3>
                            </div>
                            <ul className="list-unstyled mt-4">
                                <li className="d-flex mt-3 mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Post your requirements.
                                </li>
                                <li className="d-flex mt-3 mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Sit back for multiple suppliers to contact you.
                                </li>
                                <li className="d-flex mt-3 mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Choose among the suppliers based on the ratings and reviews.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
