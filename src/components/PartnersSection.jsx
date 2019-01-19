import React from 'react';
import R from 'res/R';
import cowi from '../assets/cowi_logo.png'
import europe_aid from '../assets/europe_aid_logo.png'
import ecorys from '../assets/ecorys_logo.png'
import dfc from '../assets/dfc_logo.png'
import dai from '../assets/dai_logo.png'
import ikei from '../assets/ikei_logo.png'


/**
 * Displays the body Services section.
 * @function
 */
export default function PartnersSection() {
    // return views,
    return (
        <div style={rootStyle}>
            <p style={headingStyle}>We are partnered with the right people</p>
            <span style={textStyle}>We are a Registered Education Provider 
            of both the International Association of Innovation Professionals
             and of the Project Management Institute.</span>
             <span style={textStyle}>We also frequently team up with other consulting firms to form consortia for international assignments.</span>
             <div style={partnerImageContainer}>
                <img style={imageStyle} src={dfc}></img>
                <img style={imageStyle} src={dai}></img>
                <img style={imageStyle} src={ikei}></img>
                <img style={imageStyle} src={europe_aid}></img>
                <img style={imageStyle} src={ecorys}></img>
                <img style={imageStyle} src={cowi}></img>
             </div>
        </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: '0 0 400px',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem'
}

// partners container
const partnerImageContainer = {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '1rem'
}
   
// partners container
const imageStyle = {
    width: '100px',
    height: 'auto',
    margin: '1rem'
}
   
// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '28px',
    padding: '1rem',
    margin: '0px',
    fontWeight: '700'
}

// heading style,
const textStyle = {...R.styles.text,
    display: 'flex',
    fontSize: '1rem',
    padding: '1rem',
    textAlign: 'center'  
}