import React from "react";
import ProfilePic from "../../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"
import './SectionTestimonials.css'

export default function SectionTestimonials(){

    return(
        <div id="testimonials" className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                Join our community of food enthusiasts and start creating unforgettable dishes today.
                </p>
            </div>

            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt=""/>
                <p>
                "The variety of recipes is incredible, and the app is so user-friendly. I'm hooked!" 
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2 className="social-proof">David Smith</h2>
            </div>

        </div>
    )
}