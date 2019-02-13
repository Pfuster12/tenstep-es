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
    <div style={columnStyle}>
        <span style={textStyle}>{R.strings.tenstep_spain}</span>
        <span style={textStyle}>{R.strings.copyright}</span>
    </div>
        <a style={{...textStyle, padding: '0px', paddingBottom: '16px'}}>Privacy Policy</a>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: R.colours.primaryDarker
}

const columnStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
}

// heading style,
const textStyle = {...R.styles.text,
    color: R.colours.white,
    fontSize: '12px',
    padding: '16px'
}