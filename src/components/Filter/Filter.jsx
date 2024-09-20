import React from 'react';
import './Filter.css';

const Filter = ({ filterText, onFilterChange }) => {
    return (
        <div className="filter">
            <input
                type="text"
                value={filterText}
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Filter blocks..."
            />
        </div>
    );
};

export default Filter;
