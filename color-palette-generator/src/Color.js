import React, { useState, useEffect } from 'react';

// import rgbToHex from './utilities';

const Color = ({rgb, index, hexColor}) => {

    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');

    const hexValue = `#${hexColor}`;

    useEffect(()=> {

        const timeOut= setTimeout(()=> {

            setAlert(false);

        }, 1000)

        return () => clearTimeout(timeOut);

    }, [alert])

    return (

    // change the bg color & the text to white for the darker shades from the api
    <article className={`color ${index > 10 && 'light-text'}`} style={{ backgroundColor: `rgb(${bcg})`}} onClick={() => {setAlert(true); navigator.clipboard.writeText(hexValue);}}>

        <p className="hex-color">{hexValue}</p>
      
        {alert && <p className="alert">Copied To Clipboard</p>}

        
    </article>

    );

}

export default Color;