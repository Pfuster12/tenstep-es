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
            <p style={headingStyle}>Tenstep Spain has lead over 100 assignments in emerging countries</p>
            <span style={textStyle}>{R.strings.lorem_ipsum}</span>
        </div>
        )
    }
    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        flex: '0 0 600px',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem'
    }
    
    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: '28px',
        padding: '1rem',
        fontWeight: '700',
    }
    
    // heading style,
    const textStyle = {...R.styles.text,
        width: '400px',
        fontSize: '1rem',
        padding: '1rem'
    }