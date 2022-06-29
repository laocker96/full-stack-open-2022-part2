import { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {

    const [weatherStat, setWeatherStat] = useState(null);

    useEffect(() => {
        axios
            .get("http://api.openweathermap.org/data/2.5/weather", {
                params: {
                    lat: country.latlng[0],
                    lon: country.latlng[1],
                    units: "metric",
                    appid: process.env.REACT_APP_WEATHER_SECRET_KEY
                }
            })
            .then((response => {
                setWeatherStat(response.data);
            }))
    }, [])
    return (
        <div >
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                {Object.keys(country.languages).map((key) => (
                    <li>{country.languages[key]}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            {weatherStat != null &&
                <>
                    <p>temperature {weatherStat.main.temp} Celsius</p>
                    {weatherStat.weather.map((stat) => (
                        <img src={`https://openweathermap.org/img/wn/${stat.icon}@2x.png`} alt={`Icon of ${stat.description}`} />
                    ))}
                    <p>wind {weatherStat.wind.speed} m/s</p>
                </>
            }
        </div>
    );
}

export default Country;