import React from 'react';

const Conutry = ({country}) => {
    console.log(country);
    return(
        <div>
            <h3>Name: {country.name.common}</h3>
        </div>
    )
}
export default Conutry;