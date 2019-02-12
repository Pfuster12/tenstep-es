import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';
import logo from '../assets/logo.svg'

/**
 * The Header of the website.
 * @function
 */
export default function StickyHeader(props) {

    // return views,
    return (
    <React.Fragment>
        <Button image={logo}
            titleStyle={imageStyle}/>
        <Button title={R.strings.corpsolutions}
            titleStyle={headingStyle}
            hover={false}/>
        <HeaderLinks/>
     </React.Fragment>
    )
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    fontWeight: 'bold',
    paddingLeft: '1rem',
    marginRight: '1rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: R.colours.white
}

// image style,
const imageStyle = {...R.styles.heading,
    width: '46px',
    height: '50px',
    cursor: 'pointer'
}