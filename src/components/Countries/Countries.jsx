import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your visited Country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    // remove item from an array in state
    // use filter to select all the elecment expect the one you want to remove

    return (
        <div className="">
            <h3>countries {countries.length}</h3>
            {/* visited country */}
            <div>
                <h4>Visited country: {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* flags */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        key={country.cca3}
                        country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;