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
    alignItems: 'center',
    minHeight: '5rem',
    backgroundColor: R.colours.primaryDarker
}

// heading style,
const textStyle = {...R.styles.text,
    fontSize: '0.7rem',
    color: R.colours.white,
    padding: '1rem',
}