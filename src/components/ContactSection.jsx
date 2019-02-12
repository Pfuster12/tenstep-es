import React from 'react';
import R from 'res/R';
import Title from './Title';

/**
 * Displays the About Section.
 * @function
 */
export default function ContactSection() {
    // return views,
    return (
    <div style={rootStyle}>
         <Title strokeColor={R.colours.white}
                title={'Contact'}
                text={"Contact us for more information and questions."}/>
        <div style={{width: '600px', height: '10x'}}></div>
        <span style={textStyle}>{R.strings.contact_name_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_email_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_instituion_title}</span>
        <input style={inputStyle}/>
        <span style={textStyle}>{R.strings.contact_comments_title}</span>
        <textarea style={textAreaStyle}
            placeholder={"Write any comments you would like to add to your request..."}/>
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
    padding: '2rem',
    backgroundColor: R.colours.primary,
}

const inputStyle = {
    width: '400px',
    padding: '12px',
    borderRadius: '4px',
    border: 'none'
}

const textAreaStyle = {
    width: '400px',
    height: '280px',
    overflow: 'vertical',
    borderRadius: '4px',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    fontFamily: R.fonts.text,
    resize: 'none'
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
    opacity: 1,
    fontWeight: 'bold',
    color: R.colours.white,
    textAlign: 'justify'
}