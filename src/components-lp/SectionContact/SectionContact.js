import React from "react";

export default function SectionContact(){
    return(
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Have Questions in Mind?</h1>
            <h1 className="primary-heading">Let us Help You</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="yourmail@gmail.com"/>
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    )
}