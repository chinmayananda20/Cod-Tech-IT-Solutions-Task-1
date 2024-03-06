// navbar component 
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [cityname, setcityname] = useState("");
  // search function 
  const searchClick = () => {
    if (cityname === "") {
      props.updatecity("hyderabad");
    } else {
      props.updatecity(cityname);
    }
  };
  const funcOnChange = (event) => {
    setcityname(event.target.value);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* logo */}
        <a className="navbar-brand" href="/">
          Weather
        </a>
        {/* navs */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Current
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forecast">
                Forecast
              </Link>
            </li>
          </ul>
          {/* search  */}
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter City"
              onChange={funcOnChange}
              value={cityname}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={searchClick}
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
