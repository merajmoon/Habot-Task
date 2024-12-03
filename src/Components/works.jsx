import React from 'react';
import '../assets/css/works.css';

const Works = () => {
    const steps = [
        {
            icon: 'fas fa-user-plus',
            title: 'Select Your Role and Sign Up',
            description: 'Choose whether you are a buyer or supplier and sign up.',
        },
        {
            icon: 'fas fa-file-alt',
            title: 'Buyers Post Your Requirements',
            description: 'Create detailed listings of what you need.',
        },
        {
            icon: 'fas fa-check',
            title: 'Review, Select, and Contact the Best Suppliers',
            description: 'Compare suppliers and connect with the best ones.',
        },
        {
            icon: 'fas fa-edit',
            title: 'Suppliers Complete Your Profile',
            description: 'Update your profile and get notified of opportunities.',
        },
        {
            icon: 'fas fa-share-square',
            title: 'Contact Buyers and Share Your Quote',
            description: 'Submit your service quotes to potential buyers.',
        },
        {
            icon: 'fas fa-handshake',
            title: 'Make Business and Leave Feedback',
            description: 'Build relationships and share valuable feedback.',
        },
    ];

    return (
        <section className="works-section py-5" data-aos="zoom-in">
            <div className="container">
                <h2 className="text-center mb-4 mt-4" style={{ fontWeight: 'bolder' }}>How it works?</h2>
                <div className="d-flex justify-content-center mb-5">
                    <p className="text-center mb-5 works-para">
                        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships.
                    </p>
                </div>
                <div className="row no-gutters">
                    {steps.map((step, index) => (
                        <div className="col-md-4 col-sm-6 p-0" data-aos={index % 2 !== 0 ? "flip-left":'flip-right'} data-aos-delay={index + 50} key={index}>
                            <div className={index % 2 !== 0 ? 'card text-center shadow-none h-100' : 'card-with-bg text-center shadow-sm h-100'}>
                                <div className="card-body">
                                    <i className={`${step.icon} fa-3x  mb-3`}></i>
                                    <h5 className="card-title">{step.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
