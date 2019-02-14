import React from 'react';
import R from 'res/R';
import Title from './Title';
import satellite from '../assets/satellite_lined.svg'
import galaxy from '../assets/galaxy.svg'
import globe from '../assets/globe.svg'
import planet from '../assets/planet.svg'
import MediaQuery from "react-responsive";

/**
 * Displays the About Section.
 * @function
 */
export default function ContactSection() {
    // return views,
    return (
    <div style={rootStyle}>
            <div style={
                    {
                        display: 'flex', 
                        flexDirection: 'column',
                        flex: 1,
                        paddingLeft: '6vw'
                    }
                }>
     <Title strokeColor={R.colours.white}
                title={'Interested?'}
                text={"Contact us for more information and questions."}/>
        
                <span style={textStyle}>{R.strings.contact_name_title}</span>
                <input size="5" style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_email_title}</span>
                <input size="5" type="email" style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_instituion_title}</span>
                <input size="5"  style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_comments_title}</span>
                <textarea style={textAreaStyle}
                    placeholder={"Write any comments you would like to add to your request..."}/>
            </div>
            <MediaQuery query="(min-width: 800px)">
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    paddingTop: '42px'
                }
            }>
            <img style={
                {
                    maxWidth: '150px',
                    height: 'auto',
                    opacity: 0.6
                }
            } src={galaxy}></img>
            <div style={
                {
    
                    flexDirection: 'column',
                    marginTop: '150px',
                    marginLeft: '200px',
                }
            }>
            <img style={
                {
                    maxWidth: '200px',
                    height: 'auto',
                    opacity: 0.6
                }
            } src={satellite}></img>
            </div>
            </div>
            </MediaQuery>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    padding: '32px',
    flexDirection: 'row',
    backgroundImage: `linear-gradient(-2deg, ${R.colours.primaryDarker}, #26184f)`
}
//#333377

const inputStyle = {
    minWidth: '20px',
    maxWidth: '280px',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    textColor: R.colours.darkGrey
}

const textAreaStyle = {
    maxWidth: '280px',
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
    maxWidth: '400px',
    fontSize: '16px',
    padding: '16px',
    opacity: 1,
    fontWeight: 'bold',
    color: R.colours.white,
}