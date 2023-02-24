import React from 'react'

import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx';

function TemplatePage(props) {
    return <>
        <Navbar />
        {props.page}
        <Footer />
    </>
}

export default TemplatePage