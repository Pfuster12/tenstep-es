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
        <span style={headingStyle}>About Section</span>
        <span style={textStyle}>{R.strings.lorem_ipsum}</span>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: '0 0 400px',
    flexDirection: 'column',
    padding: '2rem',
    backgroundColor: '#1C272B',
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    padding: '1rem',
    fontWeight: 'bold',
    color: R.colours.white
}

// heading style,
const textStyle = {...R.styles.text,
    width: '400px',
    fontSize: '1rem',
    padding: '1rem',
    color: R.colours.white,
    textAlign: 'justify'
}