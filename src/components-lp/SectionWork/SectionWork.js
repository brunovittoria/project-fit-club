import React from "react";
import PickMeals from "../../assets/pick-meals-image.png"
import ChooseMeals from "../../assets/choose-image.png"
import DeliveryMeals from "../../assets/delivery-image.png"

export default function SectionWork(){
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Browse our extensive collection of recipes, categorized for your convenience.",
        },
        {
            image: ChooseMeals,
            title: "Follow Instructions",
            text: "Follow step-by-step instructions, complete with helpful tips and visuals.",
        },
        {
            image: DeliveryMeals,
            title: "Get rid of Delivery Apps",
            text: "Cook with confidence and savor the delicious results",
        },
        
    ]
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it Works</h1>
                <p className="primary-text">
                Simple Steps to Culinary Excellence
                </p>
            </div>

            <div className="work-section-bottom">
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt=""/>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}