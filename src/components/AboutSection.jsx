import React from 'react';
import R from 'res/R';

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSection() {
    // return views,
    return (
    <div style={rootStyle}>
        <span style={textStyle}>About Section</span>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
}

// heading style,
const textStyle = {...R.styles.text,
    fontSize: '20px',
    padding: '1rem',
}