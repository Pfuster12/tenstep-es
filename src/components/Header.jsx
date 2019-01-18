import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';
import logo from '../assets/tenstep_logo.png'

/**
 * The Header of the website.
 * @function
 */
export default function Header() {
    // return views,
    return (
        <div style={rootStyle}>
            <Button title={R.strings.appName}
                titleStyle={headingStyle}
                hover={false}
                image={logo}/>
            <HeaderLinks/>
        </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    height: '5rem',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    padding: '1rem'
}