import React from 'react';
import './bookmarkBox.css';

function BookmarkBox({children, verticalText}) {
    return (
        <section className="bookmark-container">
            <div className="bookmark-vertical-text"><h3>{verticalText}</h3></div>
            <div className="bookmark-content">{children}</div>
        </section>
    );
}

export default BookmarkBox;