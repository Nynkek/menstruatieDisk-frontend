import React from 'react';

function YellowContentBox({children}) {
    return (
        <div>
            <article className="content-bigbox">
                {children}
            </article>
        </div>
    );
}

export default YellowContentBox;