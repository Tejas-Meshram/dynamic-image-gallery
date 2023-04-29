import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search images..." value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;