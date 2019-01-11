import React from 'react';
import R from 'res/R';
/**
 * Displays the body Services section.
 * @function
 */
export default function ClientsSection() {
    // return views,
    return (
        <div style={rootStyle}>
            <span style={headingStyle}>Partners Section</span>
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
        backgroundColor: '#283E4E',
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