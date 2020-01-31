import React, { Fragment } from 'react';
import Card from './Card.js';

function CardList({ loading, countries }) {
  return (
    <Fragment>
    {
      !loading
      ? (<Card country={countries[0]} />)
      : null
    }
    </Fragment>
)
}

export default CardList;
