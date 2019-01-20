import React from 'react';
import Button from './Button';
import R from 'res/R';

/**
 * Handles the section links in the header.
 * @function
 */
export default function HeaderLinks() {

    // return views,
    return (
        <div style={rootStyle}>
            <Button title={R.strings.about_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
            <Button title={R.strings.services_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
            <Button title={R.strings.references_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
            <Button title={R.strings.resources_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
            <Button title={R.strings.partners_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
            <Button title={R.strings.contact_header} 
                titleStyle={linkStyle}
                hover={true}
                idleColor={R.colours.white}
                hoverColor={R.colours.accent}/>
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
    fontWeight: '700',
    padding: '1.5rem',
    opacity: 1
}