import React from 'react';
import "./twoColumn5050.css";

function TwoColumn5050({children}) {
    return (
        <section className="page-content columnCountContainer">
            {children}
        </section>
    );
}

export default TwoColumn5050;