import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://storage.googleapis.com/varal-habot-vault-marketplace-10032022/images/updated%20trans-Habot-logo-png.png"
                        alt="Habot Logo"
                        className="img-fluid"
                        style={{ height: '60px', width: 'auto' }}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-dark">
                            <a className="nav-link text-dark" href="/">Find Suppliers</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-dark"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Find Service Tags
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">BackLink Creation</a></li>
                                <li><a className="dropdown-item" href="/">Image/Video Creation</a></li>
                                <li><a className="dropdown-item" href="/">Content Creation</a></li>
                            </ul>
                        </li>
                        <li className="nav-item text-dark">
                            <button className="btn btn-outline-success ms-3">
                                Login / Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
