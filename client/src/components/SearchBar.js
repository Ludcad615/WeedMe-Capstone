import React from 'react'

function SearchBar({searchTerm,onSearchChange}) {
  

      function handleSubmit(e) {
        e.preventDefault();
        onSearchChange(searchTerm)
      }
    
      
        return (
          <div className="searchbar" onSubmit={handleSubmit}>
            <label htmlFor="search">Search Flowers:</label>
            <input
              type="text"
              id="search"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        )
      }

export default SearchBar