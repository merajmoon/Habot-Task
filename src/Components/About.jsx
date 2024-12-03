import React from 'react';
import '../assets/css/about.css';

const About = () => {
    return (
        <section className="about-section  bg-white">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 py-5" data-aos="fade-up" >
                        <h2 className="about-heading mb-4">
                            Ready to dive into <span className="highlight">HABOT?</span>
                        </h2>
                        <p className="about-description mb-4">
                            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                        </p>
                        <button className="btn btn-success w-50">
                            Sign up Today! <i className="fas fa-arrow-right right-animation ms-2"></i>
                        </button>
                    </div>


                    <div className="col-md-6 py-5">
                        <div className="grid row g-3">
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Abu Dhabi
                                </div>
                            </div>
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Dubai
                                </div>
                            </div>
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Sharjah & Ajman
                                </div>
                            </div>
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Fujairah
                                </div>
                            </div>
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Ras Al Khaimah
                                </div>
                            </div>
                            <div className="col-6" data-aos="zoom-out">
                                <div className="grid-item p-3 border border-warning text-center rounded">
                                    Umm Al Quwain
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
