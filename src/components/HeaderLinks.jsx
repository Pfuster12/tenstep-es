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
        <Button title={"About"} 
            titleStyle={linkStyle}/>
        <Button title={"Services"} 
        titleStyle={linkStyle}/>
        <Button title={"References"} 
        titleStyle={linkStyle}/>
        <Button title={"Resources"} 
        titleStyle={linkStyle}/>
        <Button title={"Partners"} 
        titleStyle={linkStyle}/>
        <Button title={"Contact"} 
        titleStyle={linkStyle}/>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
}

// heading style,
const linkStyle = {...R.styles.text,
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '16px'
}