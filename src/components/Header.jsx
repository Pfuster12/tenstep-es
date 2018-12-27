import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';

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
                hover={false}/>
            <HeaderLinks/>
        </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    height: '80px',
    flexDirection: 'row',
    alignItems: 'center'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '36px',
    fontWeight: 'bold',
    padding: '16px'
}