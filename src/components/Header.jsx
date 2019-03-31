import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';
import logo from '../assets/pyramid_logo.png'
import { Link, animateScroll as scroll } from "react-scroll";


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
        height: 'auto',
        padding: '14px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        zIndex: 2,
        boxShadow: '0px 1px 3px DarkGray',
        backgroundColor: 'white',
    }

    // return views,
    return (
            <div style={rootStyle}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500}>
            <Button image={logo}
                titleStyle={imageStyle}/>
        </Link>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.corpsolutions}
                titleStyle={headingStyle}
                hover={false}/>
        </Link>
                <div style={{alignSelf: 'flex-end', marginBottom: '4px'}}>
                <HeaderLinks/>
                </div>
            </div>
    )
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '38px',
    fontWeight: '900',
    paddingLeft: '1rem',
    marginRight: '1rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: R.colours.tenstepBlue
}

// image style,
const imageStyle = {...R.styles.heading,
    width: '40px',
    height: '34px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
}