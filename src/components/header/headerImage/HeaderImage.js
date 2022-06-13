import React from 'react';

function HeaderImage({headerImage, pageTitle}) {
    return (
        <div className="header-img-container">
            <figure>
                <img src={headerImage} className="header-img"/>
            </figure>
            <div className="page-title">
                <h1>{pageTitle}</h1>
            </div>

        </div>
    );
}

export default HeaderImage;
