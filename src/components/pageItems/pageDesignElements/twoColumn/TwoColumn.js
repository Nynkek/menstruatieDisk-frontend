import React from 'react';
import "./twoColumn5050.css";


function TwoColumn({children}) {

    return (
        <div className="columnContainer page-content ">
        { children }
        </div>
    );
}

export default TwoColumn;