import React from 'react';
import R from 'res/R';
import julioPic from '../assets/julio_profile.png'
import albertoPic from '../assets/alberto_profile.jpg'
import ProfileImage from './ProfileImage';

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSection() {
    // return views,
    return (
    <div style={rootStyle}>
        <span style={headingStyle}>About Us</span>
        <p style={textStyle}>TenStep Innovation Management, led by Corporate Solutions,
         specializes in consulting and advisory services to win and manage projects funded
          generally by international institutions which foster economic development.</p>
        <p style={text2Style}>Combined with the expertise of Consortium members of other European 
        consulting firms we bid and implement international assignments in emerging countries.
         Since 1999 we have garnered substantial experience in business innovation (especially the 
         feasibility and support of innovation and entrepreneurship structures, such as science
          and technology parks and areas, incubation centres and hubs.</p>
        <div style={imagesContainerStyle}>
            <ProfileImage src={julioPic} text={"Julio Fuster"}/>
            <ProfileImage src={albertoPic} text={"Alberto Gomez"}/>
        </div>
        
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
    padding: '2rem'
}

// images div style
const imagesContainerStyle = {
    display: 'flex',
    flex: '0 0 200px',
    flexDirection: 'row',
    marginTop: '2rem'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    paddingLeft: '1rem',
    paddingBottom: '1rem',
    fontWeight: 'bold',
    color: R.colours.darkGrey
}

// heading style,
const textStyle = {...R.styles.text,
    width: '496px',
    fontSize: '16px',
    padding: '1rem',
    lineHeight: '26px',
    opacity: 0.7,
    color: R.colours.darkGrey
}

// heading style,
const text2Style = {...R.styles.text,
    width: '496px',
    paddingLeft: '1rem',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0px',
    opacity: 0.7,
    color: R.colours.darkGrey
}