import React from "react";
import "./Navbar.css"; // Import external CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="logo">Alibaba</div>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <a href="#" className="nav-item">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">Categories</a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">Create Product</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
