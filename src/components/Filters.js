import React from 'react';

const Filters = ({ onSearch }) => {
  const filters = ['Mountains', 'Dogs', 'Trees', 'Sunsets', 'Beaches', 'Flowers'];

  const handleFilterClick = (filter) => {
    onSearch(filter);
  }

  return (
    <div className="filters-container">
      {filters.map((filter, index) => (
        <button key={index} onClick={() => handleFilterClick(filter)}>{filter}</button>
      ))}
    </div>
  );
}

export default Filters;