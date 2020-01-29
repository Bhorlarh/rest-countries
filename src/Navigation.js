import React, { Fragment } from 'react';
import './Navigation.css';
import lightMoon from './moon.png';
import darkMoon from './black-moon.png';

function Navigation ( { colorMode, changeMode } ) {

  // control light or dark mode with CSS classes in string
  const headerClasses =
    'flex items-center justify-between pl5' +
    ( colorMode === 'light' ? ' light-mode' : ' dark-mode' );

  return (
    <Fragment>
    <header className={ headerClasses }>
      <h3>Where in the world</h3>
      <div className='flex justify-between items-center mr5' onClick={changeMode}>
        <img src={ colorMode === 'light' ? lightMoon : darkMoon } alt="moon" height="15px" />
        <h5>Dark Mode</h5>
      </div>
    </header>
    </Fragment>
  )
}

export default Navigation;
