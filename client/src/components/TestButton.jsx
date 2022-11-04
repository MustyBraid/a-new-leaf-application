import React from 'react'
import { showNotification, setupTimer,stopNotification } from './Notification';

const Button = () => {
    
    return (
        <div>
            <button color="primary" onClick={()=>{
                console.log("clicked")
                setupTimer()
                }} className='fiveSec'>Try </button>
                <button color="primary" onClick={()=>{
                console.log("clicked")
                stopNotification()
                }} className='fiveSec'>Kill</button>
        </div>
    )
};
export default Button