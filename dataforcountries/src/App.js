import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";

function App() {

  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios
      .get("https://restcountries.com/v3.1/all")
      .then(result => {
        const data = result.data;
        data.forEach(country => {
          country.show = false;
        });
        setCountries(data);
      })

  }, []);

  const handleChange = (event) => {
    setSearchCountry(event.target.value);
  }

  const handleClick = (mappedCountry) => { 
    const copy = [...countries];
    const index = countries.findIndex((country) => country == mappedCountry);
    countries[index].show = !countries[index].show;
    setCountries(copy);
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));

  return (
    <div>
      find countries <input value={searchCountry} onChange={handleChange} />
      {searchCountry !== "" &&
        <>
          {filteredCountries.length > 10 &&
            <p>Too many matches, specify another filter</p>
          }
          {filteredCountries.length <= 10 && filteredCountries.length > 1 &&
            filteredCountries.map((country) => (
              <div key={country.name.common}>
                {!country.show &&
                  <>
                    {country.name.common}
                    < button onClick={() => handleClick(country)} >show</button>
                  </>
                }
                {country.show &&
                  <>
                    <button onClick={() => handleClick(country)}>hide</button>
                    <Country country={country} />
                  </>
                }
              </div >
            ))
          }
          {filteredCountries.length === 1 &&
            <Country country={filteredCountries[0]} />
          }
        </>
      }
      {

      }
    </div >
  );
}

export default App;
