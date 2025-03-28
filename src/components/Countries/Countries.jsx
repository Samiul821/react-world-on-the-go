import React, { use } from 'react';
import Conutry from './Countrie/Conutry';

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);
    // console.log(countries);

    return(
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            {
                countries.map(country => <Conutry country={country}></Conutry>)
            }
        </div>
    )
}
export default Countries;