import React from 'react';
import Button from './Button';
import R from 'res/R';
import { Link, animateScroll as scroll } from "react-scroll";

/**
 * Handles the section links in the header.
 * @function
 */
export default function HeaderLinks() {

    // return views,
    return (
        <div style={rootStyle}>
        <Link  activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.about_header} 
                    titleStyle={linkStyle}
                    hover={true}
                    idleColor={R.colours.primary}
                    hoverColor={R.colours.tenstepRedLighter}/>
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500}>  
            <Button title={R.strings.services_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.primary}
                hoverColor={R.colours.tenstepRedLighter}/>
                </Link>
        <Link activeClass="active" to="references" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.references_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.primary}
                hoverColor={R.colours.tenstepRedLighter}/>
                </Link>
        <Link activeClass="active" to="resources" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.resources_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.primary}
                hoverColor={R.colours.tenstepRedLighter}/>
                </Link>
        <Link activeClass="active" to="partners" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.partners_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.primary}
                hoverColor={R.colours.tenstepRedLighter}/>
        </Link>
        <Link  activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
            <Button title={R.strings.contact_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.primary}
                hoverColor={R.colours.tenstepRedLighter}/>
                </Link>
        </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
}

// heading style,
const linkStyle = {...R.styles.text,
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '16px',
    opacity: 1
}