import React from 'react';
import './Card.css';

function Card({ country, renderCountry }) {
  return (
    <div className="card element-shadow elem-dark pointer" onClick={() => renderCountry(country)}>
      <img src={country.flag} alt="flag" />

      <div className="card-content">
        <h3>{country.name}</h3>
        <span>Population: </span>{country.population.toLocaleString()}<br />
        <span>Region: </span>{country.region}<br />
        <span>Capital: </span>{country.capital}
      </div>
    </div>
  )
}

export default Card;
