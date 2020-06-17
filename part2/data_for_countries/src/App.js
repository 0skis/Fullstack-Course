import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './Components/Countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('Data from https://restcountries.eu/rest/v2/all recieved')
        setCountries(response.data)
      })
  }

  useEffect(hook,[])

  const handleSearchOnChange = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>Search for a Country:
      <div>
        <input 
        value={search}
        onChange={handleSearchOnChange}/>
      </div>
        <Countries data={countriesToShow}/>
    </div>  
  );
}

export default App;
