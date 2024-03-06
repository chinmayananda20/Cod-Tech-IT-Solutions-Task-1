// component of forecast 
import React from 'react'
import maxt from '../images/high-temperature.png'
import mint from '../images/low-temperature.png'
import temp from '../images/thermometer.png'
import wind from '../images/wind.png'
import sunrise from '../images/sunrise.png'
import sunset from '../images/sunset.png'
import '../styles/day.css'
export default function Day(props) {
    return (
        <div className='my-5 ' style={{ backgroundColor: 'yellow', borderRadius: '10px' }}>
            <div className="date my-3 d-flex" style={{ color: 'green', fontWeight: '700', fontSize: '20px', justifyContent: 'center', alignItems: 'center' }}>
                {props.date} , {props.day}
            </div>
            <hr />
            <div className="mid d-flex my-2" style={{ justifyContent: 'space-between', width: '100%', color: '#0e485a', fontWeight: '700', alignItems: 'center' }}>
                <div className="left mx-5 my-3 d-flex" style={{ width: '150px', height: '100%', backgroundColor: '#0e485a', color: 'white', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={props.image} alt="" />
                    {props.text}
                </div>
                <div className="right d-flex mx-5" style={{}}>
                    <div className="rise d-flex mx-3" style={{ alignItems: 'center' }}>
                        <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={sunrise} width='40px' alt="Error" />
                            <span>SunRise</span>
                        </div>
                        <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                            {props.sunrise}
                        </div>
                    </div>
                    <div className="rise d-flex mx-3" style={{ alignItems: 'center' }}>
                        <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={sunset} width='40px' alt="Error" />
                            <span>SunSet</span>
                        </div>
                        <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                            {props.sunset}
                        </div>
                    </div>
                </div>
            </div>
            
            <hr />

            <div className="d-flex my-2 bottom" style={{ justifyContent: 'space-around', color: '#0e485a', fontWeight: '700' }}>
                <div className="maxt d-flex component  " style={{ alignItems: 'center' }}>
                    <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={maxt} width='40px' alt="Error" />
                        <span>Max-Temp</span>
                    </div>
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                        {props.maxtemp}&deg;c
                    </div>
                </div>
                <div className="mint d-flex component " style={{ alignItems: 'center' }}>
                    <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={mint} width='40px' alt="Error" />
                        <span>Min-Temp</span>
                    </div>
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                        {props.mintemp}&deg;c
                    </div>
                </div>
                <div className="avgt  component d-flex" style={{ alignItems: 'center' }}>
                    <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={temp} width='40px' alt="Error" />
                        <span>Avg-Temp</span>
                    </div>
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                        {props.avgtemp}&deg;c
                    </div>
                </div>
                <div className="avgh  component d-flex" style={{ alignItems: 'center' }}>
                    <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span
                            className="material-symbols-outlined"
                            style={{ color: "#0e485a", fontSize: "50px" }}
                        >
                            humidity_high
                        </span>
                        <span>Avg-Humidity</span>
                    </div>
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                        {props.avghumidity}&deg;c
                    </div>
                </div>
                <div className="maxw component  d-flex" style={{ alignItems: 'center' }}>
                    <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={wind} width='40px' alt="Error" />
                        <span>Max-Wind</span>
                    </div>
                    <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '30px' }}>
                        {props.maxwind}&deg;c
                    </div>
                </div>
            </div>

        </div>
    )
}
