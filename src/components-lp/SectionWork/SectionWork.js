import React from "react";
import PickMeals from "../../assets/pick-meals-image.png"
import ChooseMeals from "../../assets/choose-image.png"
import DeliveryMeals from "../../assets/delivery-image.png"

export default function SectionWork(){
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit sdfjsdifjmsdofs sdfsdfsdf sdfsdfsdf sdf.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit sdfjsdifjmsdofs sdfsdfsdf sdfsdfsdf sdf.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit sdfjsdifjmsdofs sdfsdfsdf sdfsdfsdf sdf.",
        },
        
    ]
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consecutd sdfsdf ojmkjf asuhkovnmsd pjkfdrinp
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