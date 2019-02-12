import React from 'react';
import R from 'res/R';
import julioPic from '../assets/julio_profile.png'
import mochalPic from '../assets/tom_mochal.jpg'
import kumarPic from '../assets/himanshu_kumar.jpg'
import braggPic from '../assets/chris_bragg.png'
import dickinsonPic from '../assets/dickinson.jpg'
import hectorPic from '../assets/hector_perez.jpg'
import josePic from '../assets/jfulle.jpg'
import mohamedPic from '../assets/mohamed_ghodbane.jpg'
import ProfileImage from './ProfileImage';
import about_icons from "../assets/about_side_icons.svg";
import Title from './Title';

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSection() {

    const aboutText = "Corporate Solutions specializes in consulting and advisory services to win and manage projects, funded generally by international institutions which foster economic development. It is a TenStep group practice is made up of several global offices led by Spain —which coordinates the practice— plus TenStep offices in Tunisia, Poland, Guatemala, Ecuador."
    const aboutText2 = "Combined with the expertise of Consortium members of other European consulting firms we bid and implement international assignments in emerging countries. Since 1999 we have garnered substantial experience in business innovation —especially the feasibility and support of innovation and entrepreneurship structures, such as science and technology parks and areas, incubation centres and hubs."
    // return views,
    return (
    <div style={rootStyle}>
        <div style={columnStyle}>
            <div style={rowStyle}>
                <Title title={"About Us"}
                        text={aboutText}
                        text2={aboutText2}/>
                <div style={{width: '600px', height: '200px', backgroundColor: 'hotpink'}}></div> 
            </div>
            <span style={{...R.styles.text, 
                paddingLeft: '16px', 
                paddingTop: '16px', 
                fontSize: '22px', 
                fontWeight: 'bold'}}>Tenstep Partners</span>
            <div style={imagesContainerStyle}>
                    <ProfileImage src={julioPic} text={"Julio Fuster"} location={'Madrid, Europe'}/>
                    <ProfileImage src={mochalPic} text={"Tom Mochal"} location={'Atlanta, USA'}/>
                    <ProfileImage src={kumarPic} text={"Himanshu Kumar"} location={'New York, USA'}/>
                    <ProfileImage src={braggPic} text={"Chris Bragg"} location={'Bahrain, Middle East'}/>
                    <ProfileImage src={dickinsonPic} text={"Dickinson Agyapong"} location={'Ghana, West Africa'}/>
                    <ProfileImage src={hectorPic} text={"Hector Perez"} location={'Guatemala, Central America'}/>
                    <ProfileImage src={josePic} text={"Jose Gonzalez Fulle"} location={'Chile, South America'}/>
                    <ProfileImage src={mohamedPic} text={"Mohamed Ghodbane"} location={'Tunisia, North Africa'}/>
                </div>
        </div>    
    </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    alignSelf: 'center',
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


const columnStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
}

// images div style
const imagesContainerStyle = {
    display: 'flex',
    flex: '0 0 auto',
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