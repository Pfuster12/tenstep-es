import React from 'react';
import R from 'res/R';

/**
 * Displays the About Section.
 * @function
 */
export default function ContactSection() {
    // return views,
    return (
    <div style={rootStyle}>
        <span style={headingStyle}>Contact</span>
        <span style={textStyle}>{R.strings.contact_name_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_email_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_instituion_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_comments_title}</span>
        <textarea style={textAreaStyle}/>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: '0 0 600px',
    flexDirection: 'column',
    padding: '2rem',
    backgroundColor: '#1C272B',
}

const inputStyle = {
    width: '400px',
    padding: '0.6rem',
    borderRadius: '4px'
}

const textAreaStyle = {
    width: '400px',
    height: '600px',
    overflow: 'vertical',
    borderRadius: '4px'
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