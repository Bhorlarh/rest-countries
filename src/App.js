import React, { Fragment } from 'react';
import Navigation from './Navigation.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorMode: 'light'
    }
  }

  changeMode = () => {
    if ( this.state.colorMode === 'light' ) {
      this.setState({colorMode: 'dark'})
    } else {
      this.setState({colorMode: 'light'})
    }

  }

  render() {
    return (
      <Fragment>
        <Navigation colorMode = {this.state.colorMode} changeMode = { this.changeMode }/>
      </Fragment>
    );
  }
}

export default App;
