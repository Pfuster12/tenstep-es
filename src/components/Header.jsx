import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';
import logo from '../assets/logo.svg'
import posed, { PoseGroup } from 'react-pose'

/**
 * The Header of the website.
 * @function
 */
export default function Header(props) {

    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        height: '80px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        zIndex: 2,
        backgroundColor: sticky ? R.colours.primary : '#00fff'
    }

    // return views,
    return (
            <div style={rootStyle}>
            <Button image={logo}
                titleStyle={imageStyle}/>
            <Button title={R.strings.corpsolutions}
                titleStyle={headingStyle}
                hover={false}/>
            <HeaderLinks/>
        </div>
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