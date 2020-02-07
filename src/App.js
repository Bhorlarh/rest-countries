import React, { Fragment } from 'react';
import Navigation from './Navigation.js';
import CardList from './CardList';
import Search from './Search';
import Select from './Select';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorMode: 'light',
      apiCountries: [],
      displayCountries: [],
      region: 'Filter by Region',
      clickedOutside: false,
      loading: true
    }
  }

  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(apiCountries => this.setState({ apiCountries , displayCountries : apiCountries, loading: false }))
  }

  searchCountries = (e) => {
    const {apiCountries, searchBox} = this.state;
    const displayCountries = apiCountries.filter(country => {
      return country.name.toLowerCase().includes(document.querySelector(".search-bar").value.toLowerCase());
    })

    this.setState({ displayCountries });
  }

  selectRegion = (e) => {
    const { apiCountries } = this.state;

    // check if clicked item is a list element
    if (e.target.nodeName === "SPAN" ) {
      // change region
      this.setState({ region: e.target.textContent }, () => {
        // alert(this.state.region);
        // filter countries by region
        const displayCountries = apiCountries.filter(country => {
          return country.region.toLowerCase() === this.state.region.toLowerCase();
        })

        this.setState({ displayCountries });
      })
    }
  }

  changeColorMode = () => {
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
      <div onClick={() => {this.setState({clickedOutside: true})}}>
        <Navigation colorMode={this.state.colorMode} changeMode={this.changeColorMode}/>
        <div className="flex justify-between filter flex-wrap items-start">
          <Search searchCountries={this.searchCountries} />
          <Select selectRegion={this.selectRegion} region={this.state.region} clickedOutside={this.state.clickedOutside}/>
        </div>
        <CardList loading={this.state.loading} countries={this.state.displayCountries} searchBox={this.state.searchBox}/>
      </div>
    )
  }

}

export default App;
