import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios
      .get("https://restcountries.com/v3.1/all")
      .then(result => {
        setCountries(result.data);
      })

  }, []);

  const handleOnChange = (event) => {
    setSearchCountry(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));
  const oneCountry = filteredCountries[0];

  return (
    <div>
      find countries <input value={searchCountry} onChange={handleOnChange} />
      {searchCountry !== "" &&
        <>
          {filteredCountries.length > 10 &&
            <p>Too many matches, specify another filter</p>
          }
          {filteredCountries.length <= 10 && filteredCountries.length > 1 &&
            filteredCountries.map((country) => (
              <p>{country.name.common}</p>
            ))
          }
          {filteredCountries.length === 1 &&
            <div >
              <h1>{oneCountry.name.common}</h1>
              <p>{oneCountry.capital}</p>
              <p>{oneCountry.area}</p>
              <h2>languages:</h2>
              <ul>
                {Object.keys(oneCountry.languages).map((key) => (
                  <li>{oneCountry.languages[key]}</li>
                ))}
              </ul>
              <img src={oneCountry.flags.png} alt={`Flag of ${oneCountry.name.common}`} />
            </div>
          }
        </>
      }
      {

      }
    </div >
  );
}

export default App;
