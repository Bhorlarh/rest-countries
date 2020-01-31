import React, { Fragment } from 'react';
import Navigation from './Navigation.js';
import CardList from './CardList';
import Search from './Search';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorMode: 'light',
      countries: [],
      loading: true
    }
  }

  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(apiCountries => this.setState({ countries: apiCountries, loading: false }))
  }

  changeMode = () => {
    if (this.state.colorMode === 'light') {
      this.setState({colorMode: 'dark'})
      document.querySelector("body").classList.add('dark-mode')
    }
    else {
      this.setState({colorMode: 'light'})
      document.querySelector("body").classList.remove('dark-mode')
    }
  }

  componentDidMount() {
    this.fetchCountries();
  }

  render() {
    return (
      <Fragment>
        <Navigation colorMode = {this.state.colorMode} changeMode = {this.changeMode}/>
        <Search />
        <CardList loading={this.state.loading} countries={this.state.countries}/>
      </Fragment>
    );
  }
}

export default App;
