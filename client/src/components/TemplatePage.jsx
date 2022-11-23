import React from 'react'

import Navbar from "./Navbar.jsx";

function TemplatePage(props) {
    return <>
        <Navbar/>
        {props.page}
    </>
}

export default TemplatePage