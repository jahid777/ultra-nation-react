
import { useParams } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';

const CountryDtls = () => {
    const {countryName} = useParams();

    const [country , setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
        
        })
      },[])
       
    return (
        <div>

              <img style={{height:'150px'}}src={country.flag} alt=""/>
             <h3>this is country details component {countryName}</h3>
             <p>population:{country.population}</p>
        </div>
    );
};

export default CountryDtls;