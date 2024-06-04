import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Anik Roy</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://github.com/Eternatus29" className="footer_social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/anikr29/" className="footer_social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://x.com/Eternatus29" className="footer_social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer_copy">Made with &#10084; by Anik</span>
            </div>
        </footer>
    )
}

export default Footer;