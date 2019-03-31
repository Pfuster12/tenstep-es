import React from 'react';
import R from 'res/R';
import cowi from '../assets/cowi_logo.png'
import europe_aid from '../assets/europe_aid_logo.png'
import ecorys from '../assets/ecorys_logo.png'
import dfc from '../assets/dfc_logo.png'
import dai from '../assets/dai_logo.png'
import ikei from '../assets/ikei_logo.png'
import tenstep from '../assets/tenstep_logo.png'
import MediaQuery from 'react-responsive'
import PartnerLogo from './PartnerLogo';

/**
 * Displays the body Services section.
 * @function
 */
export default function PartnersSection() {

    // return views,
    return (
        <div className="partners" style={rootStyle}>
            <p style={headingStyle}>We work together with multiple international organisations</p>
            <span style={textStyle}>We are a Registered Education Provider 
            of both the International Association of Innovation Professionals
             and of the Project Management Institute.</span>
             <span style={textStyle}>We also frequently team up with other consulting firms to form consortia for international assignments.</span>
             <MediaQuery query="(min-width: 1000px)">
             <div style={partnerImageContainer}>
             <PartnerLogo style={tenstepImageStyle} src={tenstep} link={'https://tenstep.com/'}/>
                <PartnerLogo  style={imageStyle} src={dfc} link={'http://www.thedfcgroup.com/'}/>
                <PartnerLogo  style={imageStyle} src={dai} link={'https://www.dai.com/'}/>
                <PartnerLogo  style={imageStyle} src={ikei} link={'http://www.ikei.es/'}/>
                <PartnerLogo  style={imageStyle} src={europe_aid} link={'https://ec.europa.eu/europeaid/node/22_en'}/>
                <PartnerLogo  style={imageStyle} src={ecorys} link={'https://www.ecorys.com/'}/>
                <PartnerLogo  style={imageStyle} src={cowi} link={'https://www.cowi.com/'}/>
             </div>
             </MediaQuery>
             <MediaQuery query="(max-width: 1000px)">
             <div style={
                 {
                     display: 'flex',
                     flex: 1,
                     flexDirection: 'column',
                     alignItems: 'center'
                 }
             }>
            <div style={partnerImageContainer}>
            <PartnerLogo style={tenstepImageStyle} src={tenstep} link={'https://tenstep.com/'}/>
                <PartnerLogo  style={imageStyle} src={dfc} link={'http://www.thedfcgroup.com/'}/>
                <PartnerLogo  style={imageStyle} src={dai} link={'https://www.dai.com/'}/>
                <PartnerLogo  style={imageStyle} src={ikei} link={'http://www.ikei.es/'}/>
             </div>
             <div style={partnerImageContainer}>
             <PartnerLogo  style={imageStyle} src={europe_aid} link={'https://ec.europa.eu/europeaid/node/22_en'}/>
                <PartnerLogo  style={imageStyle} src={ecorys} link={'https://www.ecorys.com/'}/>
                <PartnerLogo  style={imageStyle} src={cowi} link={'https://www.cowi.com/'}/>
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
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2vw'
}

// partners container
const partnerImageContainer = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: '1vw'
}
   
// partners container
const imageStyle = {
    width: '18vw',
    maxWidth: '100px',
    height: 'auto',
    margin: '1vw',
    cursor: 'pointer'
}

// partners container
const tenstepImageStyle = {
    width: '28vw',
    maxWidth: '180px',
    height: 'auto',
    margin: '1vw',
    cursor: 'pointer'
}
   
// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '46px',
    padding: '12px',
    fontWeight: '700',
    textAlign: 'center'
}

// heading style,
const textStyle = {...R.styles.text,
    display: 'flex',
    fontSize: '16px',
    padding: '16px',
    textAlign: 'center'  
}