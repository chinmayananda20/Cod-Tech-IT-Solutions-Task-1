// a main Component which shows current weather
import React, {  useEffect, useState } from "react";
import "../styles/main.css";
import lat from "../images/lat.svg";
import lon from "../images/lon.svg";
import speed from "../images/speed.svg";
import gust from "../images/gust.svg";
import { Link } from "react-router-dom";
export default function Main(props) {
  const [data, setData] = useState();
  // fetches current data from weather api 
  useEffect(() => {
    const fetchData = async () => {
      let url = `http://api.weatherapi.com/v1/current.json?key=66b88574173e4e29a95191548242902&q=${props.city}`;
      console.log(url);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error("hello");
      }
    };

    fetchData();
  }, [props.city]);


  return (
    <div className="body container my-5 d-flex">
      {data && data.location ? (


        <div className="d-flex fc " style={{ width: '100%', background: '#192734', borderRadius: '10px' }}>

          <div className="d-flex top my-3" style={{ justifyContent: 'space-around' }}>
            {/* top  - part 1 */}
            <div className="important d-flex acc "  >
              {/* top - part1 - left  */}
              <div>
                {/* top - part1 - left  top */}
                <span class="badge badge-pill badge-danger my-3 mx-3">
                  Last updated : {data.current.last_updated}
                </span>
                {/* top - part1 - left  mid */}
                <div className="currenttime text-center mx-2">
                  {/* main location (logo included) */}
                  <div>
                    <h3>
                      <span class="material-symbols-outlined">
                        location_on
                      </span>
                      {data.location.name}, {data.location.country}
                    </h3>
                  </div>
                  {/*/ location's date and time  */}
                  <span className="lt">Local-Time:</span> {data.location.localtime}
                </div>
                {/* top - part1 - left  bottom  */}
                <div className="currenttime d-flex acc" style={{ fontSize: "20px", justifyContent: "space-around" }}>
                  <img src={data.current.condition.icon} alt="" />
                  {data.current.condition.text}
                </div>
              </div>
              {/* top - part1 - right */}
              <div className="temp mx-3">
                {data.current.temp_c}&deg;c
                <br />
                {data.current.temp_f}&deg;f
              </div>
              {/* </div> */}
            </div>

            <div className="loglat d-flex">
              {/*top - part2 */}
              <div className="loc d-flex mx-5 acc" >
                <div className="d-flex text-center fc acc"  >
                  <img src={lon} width="70px" alt="" />
                  <span style={{ color: "white", fontSize: "20px", fontWeight: "700", }} >
                    Longitude
                  </span>
                </div>
                <div className="long" style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }}  >
                  {data.location.lon}
                </div>
              </div>

              {/*top -  part3 */}
              <div className="loc d-flex mx-5 acc" >
                <div className="d-flex text-center fc acc"  >
                  <img src={lat} width="70px" alt="" />
                  <span style={{ color: "white", fontSize: "20px", fontWeight: "700", }} >
                    Latitude
                  </span>
                </div>
                <div className="long" style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }}  >
                  {data.location.lat}
                </div>
              </div>
            </div>
          </div>





          {/* mid */}
          <div className="others my-5 d-flex acc" style={{ justifyContent: "space-around" }} >
            {/* mid-part1(wind) */}
            <div className="d-flex mid" style={{ justifyContent: 'space-around' }}>
              <div className="wind d-flex acc" >
                <div className="d-flex fc acc" style={{ color: "white", fontSize: "20px", fontWeight: "700", }}  >
                  <img src={speed} width="50px" alt="" />
                  Wind Speed
                </div>
                <div className="value" style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }} >
                  {data.current.wind_kph}
                </div>
              </div>

              {/* mid-part2(pressure) */}
              <div className="pressure d-flex acc" >
                <div className="d-flex fc acc" style={{ color: "white", fontSize: "20px", fontWeight: "700", }}  >
                  <span class="material-symbols-outlined" style={{ color: "white", fontSize: "50px" }}  >
                    compress
                  </span>
                  Pressure
                </div>
                <div className="value" style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }}  >
                  {data.current.pressure_mb}
                </div>
              </div>
            </div>

            <div className="d-flex mid" style={{ justifyContent: 'space-around' }}>

              {/* mid-part3(humidity) */}
              <div className="humidity d-flex acc" >
                <div
                  className="d-flex fc acc"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    class="material-symbols-outlined"
                    style={{ color: "white", fontSize: "50px" }}
                  >
                    humidity_high
                  </span>
                  Humidity
                </div>
                <div
                  className="value mx-1"
                  style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }}
                >
                  {data.current.humidity}
                </div>
              </div>

              {/* mid-part4(gust) */}
              <div className="gust d-flex acc">
                <div
                  className="d-flex fc acc"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  <img src={gust} width="50px" alt="" />
                  Gust
                </div>
                <div
                  className="value mx-1"
                  style={{ color: "yellow", fontSize: "50px", fontWeight: "700" }}
                >
                  {data.current.gust_kph}
                </div>
              </div>
            </div>

          </div>




          {/* bottom  */}
          {/* bottom-top  */}
          <div className=" bottom value d-flex" style={{ color: "yellow", justifyContent: "center", fontSize: "50px", fontWeight: "700" }}  >
            <div className="text-center mytext">Feels Like:</div>
            <div className="mx-2 d-flex mytext " style={{ color: "white", alignItems: 'center' }}>
              {data.current.feelslike_c}&deg;c
            </div>
          </div>

          {/* bottom-bottom  */}
          <div className="d-flex my-5" style={{ justifyContent: "center" }}>
            <button type="button" class="btn btn-warning btn-lg" style={{ backgroundColor: "yellow",fontWeight:'700'}}>
              <Link style={{color:'#0e485a'}} to='/forecast'>Daily &rarr;</Link>
              
            </button>
          </div>

        </div>
      ) : (
        <div style={{width:'100%'}}>
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
