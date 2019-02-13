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
            <div style={{display: 'flex', 
                        flexDirection: 'column',
                        flex: 1,
                        marginLeft: '32px'}}>
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
        <div style={{width: '600px', height: '10x'}}></div>
    
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
    backgroundImage: `linear-gradient(0deg, ${R.colours.primary}, ${R.colours.primaryDarker})`
}

const inputStyle = {
    width: '400px',
    padding: '12px',
    borderRadius: '4px',
    marginLeft: '16px',
    border: 'none',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    textColor: R.colours.darkGrey
}

const textAreaStyle = {
    width: '400px',
    height: '280px',
    overflow: 'vertical',
    borderRadius: '4px',
    border: 'none',
    padding: '12px',
    marginLeft: '16px',
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
    fontSize: '16px',
    padding: '1rem',
    opacity: 1,
    fontWeight: 'bold',
    color: R.colours.white,
    textAlign: 'justify'
}