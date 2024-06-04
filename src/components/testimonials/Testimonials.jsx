import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section_title">Testimonials</h2>
            <span className="section_subtitle">My teachers say</span>

            <Swiper className="testimonial_container"
                loop={true}
                spaceBetween={24}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }} modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial_card" key={id}>
                            <img src={image} alt="person" className="testimonial_img" />

                            <h3 className="testimonial_name">{title}</h3>
                            <p className="testimonial_description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;