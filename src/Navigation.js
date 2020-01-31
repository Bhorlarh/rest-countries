import React, { Fragment } from 'react';
import './Navigation.css';
import lightMoon from './moon.png';
import darkMoon from './black-moon.png';

function Navigation ( { colorMode, changeMode } ) {

  return (
    <Fragment>
    <header className='flex items-center justify-between pl5'>
      <h2>Where in the world?</h2>
      <div className='flex justify-between items-center mr5 color-mode' onClick={changeMode}>
        <img src={ colorMode === 'light' ? lightMoon : darkMoon } alt="moon" height="15px" />
        <h5>Dark Mode</h5>
      </div>
    </header>
    </Fragment>
  )
}

export default Navigation;
