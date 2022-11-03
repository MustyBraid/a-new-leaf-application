import React, { Fragment } from 'react';

function SearchBar ({placeholder, data}) {
    return (
        <div className='searchBar'>
            Thing
            <div className='searchInputs'></div>
                <input type="text" placeholder={placeholder}/>
                <div className='searchIcon'> </div>
            <div className='searhcOutputs'></div>
        </div>
    )
}

export default SearchBar