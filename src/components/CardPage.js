import React, { Fragment } from 'react';
import './CardPage.css';

function CardPage ({ country, borderCountries, changePageView, renderCountry }) {
   return (
    <Fragment>
      <div className="button shadow-2 br2 tc ml5 mv5 pv2 pointer elem-dark flex items-center justify-between" onClick={changePageView}>
        <svg className="back-arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="16px" y="16px"
           viewBox="0 0 512 512" style={{enableBackground: "new 0 0 512 512"}}>
          <g>
            <path d="M501.333,234.667H68.417l109.792-109.792c2-2,3.125-4.708,3.125-7.542V96c0-4.313-2.594-8.208-6.583-9.854
              c-1.323-0.552-2.708-0.813-4.083-0.813c-2.771,0-5.5,1.083-7.542,3.125l-160,160c-4.167,4.167-4.167,10.917,0,15.083l160,160
              c3.063,3.042,7.615,3.969,11.625,2.313c3.99-1.646,6.583-5.542,6.583-9.854v-21.333c0-2.833-1.125-5.542-3.125-7.542
              L68.417,277.333h432.917c5.896,0,10.667-4.771,10.667-10.667v-21.333C512,239.438,507.229,234.667,501.333,234.667z"/>
          </g>
        </svg>
        <span>Back</span>
      </div>

      <div className="country-container mh5 mb5 flex flex-wrap">
        <div className="flag">
          <img src={country.flag} alt={`Flag of $(country.name)`}/>
        </div>
        <div className="country-details flex flex-column">
          <h1 className="fw8 country-name">{country.name}</h1>
          <div className="flex justify-between info-container">
            <div className="country-info-first">
              <p><b>Native Name:</b> {country.nativeName}</p>
              <p><b>Population:</b> {country.population.toLocaleString()}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Sub Region:</b> {country.subregion}</p>
              <p><b>Capital:</b> {country.capital}</p>
            </div>
            <div className="country-info-second">
              <p><b>Top Level Domain:</b> {country.topLevelDomain}</p>
              <p><b>Currencies:</b> {country.currencies[0].name}</p>
              <p><b>Languages:</b> {
                country.languages.map(lang => lang.name).join(", ")
              }
              </p>
            </div>
          </div>
          <div className="border-countries flex flex-wrap items-center mt4">
            <b className="mr1">Border Countries:</b>
            {
              borderCountries.map(borderCountry => {
                return (<div key={borderCountry.name} className="element-shadow pointer pa1 tc bg-white br2 elem-dark ma1"
                onClick={() => {renderCountry(borderCountry)}}>{borderCountry.name}</div>)})
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CardPage;
