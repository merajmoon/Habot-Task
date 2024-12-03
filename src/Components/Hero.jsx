import React from "react";

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: "url('https://rics.scene7.com/is/image/rics/Modus_nov21_burjkhalifa_header_v2?$article-big-img-desktop$&op_sharpen=1')",
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                
            <div className="overlay"></div>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="hero-card" data-aos="zoom-in">
                    <h1 className="text-light text-center" style={{ fontWeight: 'bold', fontSize: '50px' }}>Are You a Supplier?</h1>
                    <h2 className="text-light text-center mt-3 mb-5" style={{ fontWeight: 'normal', fontSize: '45px' }}>Explore Matching Opportunities.</h2>
                    <div className="input-container">
                        <div className="input">
                            <i className="fa-solid fa-location-dot"></i>
                            <input type="text" className="form-control" placeholder="Search your required service here" />
                        </div>
                        <div className="input">
                            <i className="fa-solid fa-suitcase"></i>
                            <input type="text" className="form-control" placeholder="Search your desired location here" />
                        </div>
                        <div className="btns">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                    <p className="text-center text-light mt-3">
                        <span style={{ fontWeight: 'bolder' }}>Are you a buyer?</span> 
                        <span style={{ textDecoration: 'underline' }}> Click here if you are looking to post a requirements</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
