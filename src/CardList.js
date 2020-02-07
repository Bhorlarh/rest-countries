import React   from 'react';
import Card from './Card.js';
import './CardList.css';

function CardList({ loading, countries }) {
  return (
    <section className="mh5">
    { !loading
      ? (countries.map(country => (<Card country={country} />)))
      : <h1>Loading...</h1>
    }
    </section>
)
}

export default CardList;
