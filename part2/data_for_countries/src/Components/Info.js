import React from 'react'
import Weather from './Weather'

const Info = (country) => {
    return (
        <div>
            <h2>{country.country.name}</h2>
            <p>Capital: {country.country.capital}</p>
            <p>Population: {country.country.population}</p>
            <h1>Spoken languages</h1>
            <ul>
                {country.country.languages.map(x => 
                <li key={x.iso639_1}>{x.name}</li>)}
            </ul>
            <img src={country.country.flag} alt={'Flag was not available'} height='150'></img>
            <Weather country={country.country} />
        </div>
    )
}

export default Info