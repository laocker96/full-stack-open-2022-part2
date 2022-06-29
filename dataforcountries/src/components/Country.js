const Country = ({ country }) => {
    return (
        <div >
            <h1>{country.name.common}</h1>
            <p>{country.capital}</p>
            <p>{country.area}</p>
            <h2>languages:</h2>
            <ul>
                {Object.keys(country.languages).map((key) => (
                    <li>{country.languages[key]}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        </div>
    );
}

export default Country;