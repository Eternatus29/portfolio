import React from "react";

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bx bx-award about_icon"></i>
                <h3 className="about_title">Leetcode</h3>
                <span className="about_subtitle">200+ questions</span>
            </div>

            <div className="about_box">
                <i className="bx bx-briefcase-alt about_icon"></i>
                <h3 className="about_title">Projects</h3>
                <span className="about_subtitle">10+ projects</span>
            </div>

            <div className="about_box">
                <i className="bx bx-medal about_icon"></i>
                <h3 className="about_title">Hackathons</h3>
                <span className="about_subtitle">5</span>
            </div>

            <div className="about_box">
                <div className="i bx bx-hard-hat about_icon"></div>
                <h3 className="about_title">Internships</h3>
                <span className="about_subtitle">3</span>
            </div>
        </div>
    )
}

export default Info;