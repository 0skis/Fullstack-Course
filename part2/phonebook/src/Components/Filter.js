import React from 'react'

const Filter = ( {search, setSearch} ) => {
    
    const handleSearchOnChange = (event) => {
        setSearch(event.target.value)
      }
    
    return (
        <div>
          Filter names: <input
          value={search}
          onChange={handleSearchOnChange}
          />
        </div>
    )
}

export default Filter