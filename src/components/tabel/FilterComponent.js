import React from 'react';

function FilterComponent({filterText, onFilter, onClear}) {
    return (
        <>
            <input
                id="search"
                type="text"
                name="filter"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
            <button type="button" onClick={onClear}>
                X
            </button>
        </>
    );
}

export default FilterComponent;