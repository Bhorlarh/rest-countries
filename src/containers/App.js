import React, { Fragment } from 'react';
import Navigation from '../components/Navigation.js';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Select from '../components/Select';
import CardPage from '../components/CardPage';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorMode: 'light',
      apiCountries: [],
      displayCountries: [],
      region: 'Filter by Region',
      location: 'card-list',
      country: {},
      borderCountries: [],
      loading: true
    }
  }

  // make api call to rest-countries
  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(apiCountries => this.setState({ apiCountries , displayCountries : apiCountries, loading: false }))
  }

  // filter countries with search input
  searchCountries = (e) => {
    const {apiCountries} = this.state;
    const displayCountries = apiCountries.filter(country => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    })

    this.setState({ displayCountries });
  }

  // filter countries by region
  selectRegion = (e) => {
    const { apiCountries } = this.state;

    // check if clicked item is a span element
    if (e.target.nodeName === "SPAN" ) {

      // change region
      this.setState({ region: e.target.textContent }, () => {
        // filter countries by region
        const displayCountries = apiCountries.filter(country => {
          return country.region.toLowerCase() === this.state.region.toLowerCase();
        })

        this.setState({ displayCountries });
      })
    }
  }

  // change color mode
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

  // change display to country or homepage
  changePageView = (country) => {

    if (country.name) {
      // display country details
      this.setState({ location: "card-page", country });
      document.querySelector("body").classList.add("card-page");
      return;
    }
      // go to Homepage
      this.setState({ location: "card-list" });
      document.querySelector("body").classList.remove("card-page");
  }

  // set country to show
  renderCountry = (country) => {
    const countryBordersList = JSON.stringify(country.borders);
    let borderCountries;

    if (country.borders.length > 0) {
      borderCountries = this.state.apiCountries.filter(apiCountry => {
        return countryBordersList.includes(apiCountry.alpha3Code);
      })
    } else {
      borderCountries = [];
    }

    this.setState({ borderCountries })
    this.changePageView(country);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  render() {
    return (
      <Fragment>
        <Navigation
          colorMode={this.state.colorMode}
          changeMode={this.changeColorMode}
        />
        {
          this.state.location === "card-list" ?
          (
            <Fragment>
              <div className="flex justify-between filter flex-wrap items-start">
                <Search searchCountries={this.searchCountries} />
                <Select
                  selectRegion={this.selectRegion}
                  region={this.state.region}
                  clickedOutside={this.state.clickedOutside}
                />
              </div>
              <CardList
                loading={this.state.loading}
                countries={this.state.displayCountries}
                searchBox={this.state.searchBox}
                renderCountry={this.renderCountry}
              />
            </Fragment>
          )
          :
          <CardPage
            changePageView={this.changePageView}
            renderCountry={this.renderCountry}
            country={this.state.country}
            borderCountries={this.state.borderCountries}
          />
        }
      </Fragment>
    )
  }
}

export default App;
