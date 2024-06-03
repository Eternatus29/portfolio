import React from "react";
import WebDev from "./WebDev";
import AppDev from "./AppDev";
import './skills.css';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Level</span>

            <div className="skills_container container grid">
                <WebDev />
                <AppDev />
            </div>
        </section>
    )
}

export default Skills;