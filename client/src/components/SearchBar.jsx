import React, { Fragment } from 'react';
import {FaSearch } from 'react-icons/fa';

function SearchBar ({placeholder}) {
    return (
        <div id='searchBar' className="flex felx-nowrap">
            <div id='searchInputs' className=''></div>
                <input type="text" placeholder={placeholder}/>
                <FaSearch className='' size='30px' />
            <div id='searchOutputs'>
                {/* http calls down here */}
            </div>
        </div>
    )
}

export default SearchBar