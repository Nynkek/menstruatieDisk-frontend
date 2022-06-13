import React from 'react';

function TextContainer({children}) {
    return (
            <section className="page-content">
                {children}
            </section>
    );
}

export default TextContainer;