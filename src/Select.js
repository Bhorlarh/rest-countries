import React, { useState, Fragment } from 'react';
import './Select.css';


function Select({ selectRegion, region, clickedOutside }) {
  const [active, setActive] = useState(false);
  const backgroundClasses = active ? ["masterBackground", "activeBackground"] : ["masterBackground"]
  const listOfRegions =
  (
    <div className="region-options flex flex-column br2 elem-dark element-shadow"
    onClick={(e) => {selectRegion(e);setActive(false)}}>
      <span className="f6 pointer">Africa</span>
      <span className="f6 pointer">Americas</span>
      <span className="f6 pointer">Asia</span>
      <span className="f6 pointer">Europe</span>
      <span className="f6 pointer">Oceania</span>
    </div>
  )
  const regionWrapper = "region-filter" + (active ? " active" : "");

  return (
    <Fragment>
      <div onClick={() => setActive(false)} className={backgroundClasses.join(' ')}></div>
      <div className={regionWrapper}>
        <div className="current-region element-shadow br2 flex justify-between items-center elem-dark pointer"
        onClick={() => {active ? setActive(false) : setActive(true)}}>
          <span className="f6">{region}</span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 491.996 491.996"
           style={{enableBackground: "new 0 0 491.996 491.996;"}} width="10px" height="auto" className="down-arrow">
            <g>
              <g>
              	<g>
              		<path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224    C491.996,136.902,489.204,130.046,484.132,124.986z" data-original="#000000" class="active-path" fill="#000000"/>
              	</g>
              </g>
            </g>
          </svg>
        </div>
        { active ? listOfRegions : null }
      </div>
    </Fragment>
  )
}

export default Select;
