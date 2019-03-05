import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange = { (event) => props.updateSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
