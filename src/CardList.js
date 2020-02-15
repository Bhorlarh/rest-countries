import React   from 'react';
import Card from './Card.js';
import './CardList.css';

function CardList({ loading, countries, renderCountry }) {
  return (
    <section className="mh5">
    { !loading
      ? (countries.map(country => (<Card key={country.name.toString()} country={country} renderCountry={renderCountry}/>)))
      : <h1>Loading...</h1>
    }
    </section>
  )
}

export default CardList;
