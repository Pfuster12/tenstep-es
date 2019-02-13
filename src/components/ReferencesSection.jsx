import React from 'react';
import R from 'res/R';
/**
 * Displays the body Services section.
 * @function
 */
export default function ReferencesSection() {
    // return views,
    return (
        <div style={rootStyle}>
            <p style={headingStyle}>Corporate Solutions has lead over 100 assignments in emerging countries</p>
            <span style={textStyle}>{R.strings.lorem_ipsum}</span>
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
        flexDirection: 'column',
        padding: '32px'
    }
    
    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: '28px',
        padding: '2vw',
        fontWeight: '700',
        textAlign: 'center'
    }
    
    // heading style,
    const textStyle = {...R.styles.text,
        maxWidth: '400px',
        fontSize: '1rem',
        padding: '1rem'
    }