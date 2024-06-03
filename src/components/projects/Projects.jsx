import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">My Projects</h2>
            <span className="section_subtitle">What I have built</span>

            <div className="projects_container container grid">
                <div className="projects_content">
                    <div>
                        <i className="uil uil-web-grid projects_icon"></i>
                        <h3 className="projects_title">
                            Web <br /> Developer
                        </h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects_button-icon"></i></span>

                    <div className={toggleState === 1 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i className="uil uil-times projects_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="projects_modal-title">
                                Web Developer
                            </h3>
                            <p className="projects_modal-description">Built these projects over a span of 3 years.</p>

                            <ul className="projects_modal-projects grid">
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        App Development Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Deep Learning Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Flask Projects
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects_content">
                    <div>
                        <i className="uil uil-arrow projects_icon"></i>
                        <h3 className="projects_title">
                            App <br /> Developer
                        </h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right projects_button-icon"></i></span>

                    <div className={toggleState === 2 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i className="uil uil-times projects_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="projects_modal-title">
                                App Developer
                            </h3>
                            <p className="projects_modal-description">Built these projects over a span of 3 years.</p>

                            <ul className="projects_modal-projects grid">
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        App Development Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Deep Learning Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Flask Projects
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects_content">
                    <div>
                        <i className="uil uil-edit projects_icon"></i>
                        <h3 className="projects_title">
                            ML <br /> Projects
                        </h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects_button-icon"></i></span>

                    <div className={toggleState === 3 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i className="uil uil-times projects_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="projects_modal-title">
                                ML/DL Developer
                            </h3>
                            <p className="projects_modal-description">Built these projects over a span of 3 years.</p>

                            <ul className="projects_modal-projects grid">
                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        App Development Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Deep Learning Projects
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="projects_modal-project">
                                    <i className="uil uil-check-circle projects_modal-icon"></i>
                                    <p className="projects_modal-info">
                                        Flask Projects
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;