import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { flag, name, capital, population} = props.country;
    return (
        <div style={{border:'1px solid red', margin: '10px', padding:'10px', textAlign: 'center'}}>
            <img  style={{height: '200px'}}src={flag} alt=""/>
            <h3>name:</h3>
            <p>capital:{capital}</p>
            <p>population:{population}</p>
         <h3>
         about: <Link to={`/country/${name}`}>
             <button>show detail of {name}</button>
         </Link>
             </h3> 
             
        </div>
    );
};

export default Country;