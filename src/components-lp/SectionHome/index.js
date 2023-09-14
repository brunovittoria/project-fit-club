import React from "react";
import NavBar from "../NavBar/NavBar";
import BannerBackground from "../../assets/home-banner-background.png"
import BannerImage from "../../assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"
import { Link } from "react-router-dom";

export default function SectionHome(){
    return(
        <div className="home-container-lp">
            <NavBar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container" id="hero">
                    <img src={BannerBackground} alt="" />
                </div>

                <div className="home-text-section">
                    <h1 className="primary-heading">
                    Your Favourite Recipes in one place
                    </h1>
                    <p className="primary-text">
                    Welcome to Yummie! Explore a world of culinary delights and discover delicious recipes that will tantalize your taste buds. Get ready to embark on a flavorful journey.
                    </p>
                    <Link className="no-decoration" to={"/form"}>
                    <button className="secondary-button">
                        Register Now <FiArrowRight/>
                    </button>
                    </Link>
                </div>

                <div className="home-image-container">
                    <img src={BannerImage} alt="" />
                </div>

            </div>
        </div>
    )

}