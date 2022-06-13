import React from 'react';
import "./twoColumnWithImg.css";

function TwoColumnWithImg({children, img, imgAlt, imgCaption}) {
    return (

        <div className="page-two-section page-content">
            <div className="page-two-section-text">
                {children}
            </div>
            <div className="page-two-section-img">
                <figure>
                    <img src={img} alt={imgAlt} className="image"/>
                    <figcaption>{imgCaption}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default TwoColumnWithImg;