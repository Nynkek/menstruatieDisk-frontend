import React from 'react';
import "./twoColumn5050.css";


function Column({children}) {
    return (
        <div className="one">
        {children}
        </div>
    );
}

export default Column;