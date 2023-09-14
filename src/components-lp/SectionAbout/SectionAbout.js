import React from "react";
import AboutBackground from "../../assets/about-background.png"
import AboutBackgroundImage from "../../assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function SectionAbout(){

    return(
        <div id="about" className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    At Yummie, we are passionate about the art of cooking and the joy it brings to people's lives.
                </p>
                <p className="primary-text">
                    Our mission is to make cooking an enjoyable and accessible experience for everyone, from novice chefs to seasoned pros. We believe that a well-prepared meal has the power to bring people together and create lasting memories. 
                </p>
                <div className="about-buttons-container">
                <Link className="no-decoration" to={"/form"}>
                    <button id="" className="secondary-button">Learn More</button>
                </Link>
                    <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video</button>
                </div>
            </div>

        </div>
    )

}