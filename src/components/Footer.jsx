import React from 'react';
import R from 'res/R';
/**
 * Handles the website's footer.
 * @function
 */
export default function Footer() {
    // return views,
    return (
    <div style={rootStyle}>
        <span style={textStyle}>{R.strings.tenstep_spain}</span>
        <span style={textStyle}>{R.strings.copyright}</span>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: '5rem',
    backgroundColor: R.colours.primary
}

// heading style,
const textStyle = {...R.styles.text,
    fontSize: '14px',
    color: R.colours.white,
    fontWeight: 'bold',
    padding: '1rem',
}