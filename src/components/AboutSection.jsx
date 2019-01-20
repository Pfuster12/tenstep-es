import React from 'react';
import R from 'res/R';
import julioPic from '../assets/julio_profile.png'
import albertoPic from '../assets/alberto_profile.jpg'
import ProfileImage from './ProfileImage';
import about_icons from "../assets/about_side_icons.svg";

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSection() {
    // return views,
    return (
    <div style={rootStyle}>
        <div style={rowStyle}>
            <div>
                <span style={headingStyle}>About Us</span>
                <p style={textStyle}> Corporate Solutions
                specializes in consulting and advisory services to win and manage projects, funded
                generally by international institutions which foster economic development. It is a TenStep
                group practice is made up of several global offices led by Spain —which coordinates the practice—
                    plus TenStep offices in Tunisia, Poland, Guatemala, Ecuador.</p>
                <p style={text2Style}>Combined with the expertise of Consortium members of other European 
                    consulting firms we bid and implement international assignments in emerging countries.
                    Since 1999 we have garnered substantial experience in business innovation —especially the 
                    feasibility and support of innovation and entrepreneurship structures, such as science
                    and technology parks and areas, incubation centres and hubs.</p>
            </div>
            <img style={aboutImageStyle} src={about_icons}></img>
        </div>
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
    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    minWidth: '0',
    padding: '2rem',
    //backgroundImage: 'linear-gradient(00deg, ##E6F8F7, #fff)'
}

const rowStyle = {
    alignSelf: 'stretch',
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
}

// images div style
const imagesContainerStyle = {
    display: 'flex',
    flex: '0 0 200px',
    flexDirection: 'row',
    marginTop: '2rem'
}

// images div style
const aboutImageStyle = {
    width: '400px',
    height: 'auto',
    paddingTop: '16px'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '36px',
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
    color: R.colours.darkGrey
}

// heading style,
const text2Style = {...R.styles.text,
    width: '496px',
    paddingLeft: '1rem',
    fontSize: '16px',
    margin: '0px',
    color: R.colours.darkGrey
}