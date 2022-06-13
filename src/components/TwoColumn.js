import React from 'react';
import cupsOnRackImg
    from "../../../menstruatiedisk-frontend/src/assets/20211217-16-42-27-Cupkiezer-verschillende-menstruatiecup-vergelijken-op-kruidenrek-1024x1024.jpg";

function TwoColumn({children, img, imgAlt, imgCaption}) {
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

export default TwoColumn;