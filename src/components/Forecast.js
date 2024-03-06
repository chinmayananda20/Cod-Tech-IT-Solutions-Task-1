// a component which gives forecast data 
import React, { useEffect, useState } from "react";
import Day from './Day'
export default function Forecast(props) {
    const [data, setData] = useState();
    function getDayOfWeek(dateString) {
        const dateObject = new Date(dateString);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = dateObject.getDay();
        return daysOfWeek[dayIndex];
      }
    //   function to fetch forecast data from weather api 
    useEffect(() => {
        const fetchData = async () => {
            let url = `https://api.weatherapi.com/v1/forecast.json?key=66b88574173e4e29a95191548242902&q=${props.city}&days=5`
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

        <div className='container my-5 p-5' style={{ background: '#192734', height: '100%', borderRadius: '10px' }}>
            <div>
            {data && data.location ? (
                <div className="text-center" style={{color:'white',fontWeight:'700',fontSize:'30px'}}>
                    {data.location.name},{data.location.country}
                </div>
            ) : (<div style={{width:'100%'}}>
            <div class="text-center">
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            </div>)}
  
            </div>
            {data && data.forecast && data.forecast.forecastday && data.forecast.forecastday.map((element) => (
                <div key={element.id}>
                    <Day
                        date={element.date}
                        day = {getDayOfWeek(element.date)}


                        avgtemp={element.day.avgtemp_c}
                        maxtemp={element.day.maxtemp_c}
                        mintemp={element.day.mintemp_c}

                        avghumidity={element.day.avghumidity}

                        maxwind={element.day.maxwind_kph}


                        text={element.day.condition && element.day.condition.text}
                        image={element.day.condition && element.day.condition.icon}


                        sunrise={element.astro && element.astro.sunrise}
                        sunset={element.astro && element.astro.sunset}
                    />
                </div>
            ))}
            

        </div>
    )
}
