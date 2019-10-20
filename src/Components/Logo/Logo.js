import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import video from './play-button.png';

const Logo = ()=>{
    return (
        <div className='ma4 mt5 logo '>
            
            <Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 160 }} >
                <div className="Tilt-inner"> <img style={{paddingTop:'15px'}} alt='logo' src={video} ></img></div>
            </Tilt>

            <p className='f5 white ' id="heading">
            {'You-Loader'}
            </p>
        </div>
    )
}

export default Logo;