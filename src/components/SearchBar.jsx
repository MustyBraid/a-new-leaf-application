import React, { Fragment } from 'react';
import Search from '../assets/search.png'

function SearchBar ({placeholder}) {
    return (
        <div id='searchBar' className="flex felx-nowrap">
            <div id='searchInputs' className=''></div>
                <input type="text" placeholder={placeholder}/>
                <img id='searchIcon' src={Search} alt=''/>
            <div id='searchOutputs'>
                {/* http calls down here */}
            </div>
        </div>
    )
}

export default SearchBar