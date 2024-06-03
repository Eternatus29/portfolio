import React, { useState } from "react";
import "./courses.css";

const courses = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="courses section" id="courses">
            <h2 className="section_title">My courses</h2>
            <span className="section_subtitle">What I have learnt outside my curriculum</span>

            <div className="courses_container container grid">
                <div className="courses_content">
                    <div>
                        <i className="uil uil-web-grid courses_icon"></i>
                        <h3 className="courses_title">
                            Web <br /> Development
                        </h3>
                    </div>

                    <span className="courses_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right courses_button-icon"></i></span>

                    <div className={toggleState === 1 ? "courses_modal active-modal" : "courses_modal"}>
                        <div className="courses_modal-content">
                            <i className="uil uil-times courses_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="courses_modal-title">
                                Web Developer
                            </h3>
                            <p className="courses_modal-description">Built these courses over a span of 3 years.</p>

                            <ul className="courses_modal-courses grid">
                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        App Development courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Deep Learning courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Flask courses
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="courses_content">
                    <div>
                        <i className="uil uil-arrow courses_icon"></i>
                        <h3 className="courses_title">
                            App <br /> Development
                        </h3>
                    </div>

                    <span className="courses_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right courses_button-icon"></i></span>

                    <div className={toggleState === 2 ? "courses_modal active-modal" : "courses_modal"}>
                        <div className="courses_modal-content">
                            <i className="uil uil-times courses_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="courses_modal-title">
                                App Developer
                            </h3>
                            <p className="courses_modal-description">Built these courses over a span of 3 years.</p>

                            <ul className="courses_modal-courses grid">
                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        App Development courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Deep Learning courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Flask courses
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="courses_content">
                    <div>
                        <i className="uil uil-robot courses_icon"></i>
                        <h3 className="courses_title">
                            Machine <br /> Learning
                        </h3>
                    </div>

                    <span className="courses_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right courses_button-icon"></i></span>

                    <div className={toggleState === 3 ? "courses_modal active-modal" : "courses_modal"}>
                        <div className="courses_modal-content">
                            <i className="uil uil-times courses_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="courses_modal-title">
                                ML/DL Developer
                            </h3>
                            <p className="courses_modal-description">Built these courses over a span of 3 years.</p>

                            <ul className="courses_modal-courses grid">
                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Frontend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        App Development courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Deep Learning courses
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Backend Development
                                    </p>
                                </li>

                                <li className="courses_modal-course">
                                    <i className="uil uil-check-circle courses_modal-icon"></i>
                                    <p className="courses_modal-info">
                                        Flask courses
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

export default courses;