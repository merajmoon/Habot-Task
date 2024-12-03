import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="py-5" style={{ background: '#1f3356' }} data-aos="zoom-in-up">
            <div className="container footer-container">
                <div className="row pt-5 pb-3">
               
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <img
                            src="./image/footerlogo.png"
                            alt="Habot Logo"
                            className="img-fluid mt-3"
                            width={'80%'}
                        />
                        <h4 className="text-white mt-3 ms-4">© R Singhania</h4>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="footer-links">
                                    <h4 className="text-white ms-3  h5">Company</h4>
                                    <ul className="list-unstyled ms-3 mt-4">
                                        <li className="footer-li"><a href="#" className="footer-link">About</a></li>
                                        <li className="footer-li"><a href="#" className="footer-link">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                   
                            <div className="col-6 col-md-4">
                                <div className="footer-links">
                                    <h4 className="text-white ms-3  h5">Terms</h4>
                                    <ul className="list-unstyled ms-3 mt-4">
                                        <li className="footer-li"><a href="#" className="footer-link">Data Privacy</a></li>
                                        <li className="footer-li"><a href="#" className="footer-link">Terms</a></li>
                                        <li className="footer-li"><a href="#" className="footer-link">Accessibility</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="footer-links">
                                    <h4 className="text-white ms-3  h5">Related</h4>
                                    <ul className="list-unstyled ms-3 mt-4">
                                        <li className="footer-li"><a href="#" className="footer-link">Find Buyer</a></li>
                                        <li className="footer-li"><a href="#" className="footer-link">Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center text-md-end">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/merajoddin-siddiqui-1aaaba24b" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/moon.sidd_07/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
