import React, { useState } from 'react';
import R from 'res/R';
import ServiceBox from './ServiceBox';
import iaoip from '../assets/iaoip_logo.png'
import pmi from '../assets/pmi_logo.png'
import ecbl from '../assets/ecbl_logo.png'
import Title from './Title';
import Button from './Button';
import ImageButton from './ImageButton';
import MediaQuery from 'react-responsive'

/**
 * Displays the body Services section.
 * @function
 */
export default function TrainingSection() {

    // image container
    const imageStyle = {
        display: 'flex',
        width: '20vw',
        maxWidth: '200px',
        alignSelf: 'center',
        height: 'auto',
        margin: '0px'
    }

    //TODO a would you like to hear more from us. or request please sign in form little div not too high.
    // return views,
    return (
        <div style={
            {
                display: 'flex',
                flex: '1',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2vw',
                backgroundImage: 'linear-gradient(0deg, #fff, rgba(96, 196, 176, 0.2))'
            }
        }>

        <div style={rowContainerStyle}>
            <Title title={"Our Training and Capacity Building Services"}
                    text={"We are a Preferred/Registered Education Provider of both the International Association of Innovation Professionals (IAOIP.org) and of the Project Management Institute (PMI.org). We can prepare you for such certifications as Certified Innovation Professional or Innovation Management (IAOIP), Project Management Professional (PMP), Agile Project Management, Project Cycle Management and Monitoring and Evaluation."}/>
           <div style={{width: '100px', height: '10px'}}></div>
           <MediaQuery query="(min-width: 1000px)">
             <div style={logosContainerStyle}>
                <ImageButton src={iaoip} 
                    text={'IAIOP'}
                    noText={true}
                    link={'https://www.iaoip.org/page/Certification'}
                    imageStyle={imageStyle}/>
                <ImageButton src={pmi} 
                    text={'Project Management Institute'}
                    link={'https://www.pmi.org/certifications/types'}
                    imageStyle={imageStyle}
                    noText={true}/>
                <ImageButton src={ecbl} 
                    text={'European Business Competence License'}
                    link={'https://www.ebcl-international.eu'}
                    imageStyle={imageStyle}
                    noText={true}/>
               </div>
           </MediaQuery>
        </div>
        <MediaQuery query="(max-width: 1000px)">
            <div style={
                        {
                            display: 'flex',
                            flex: '1',
                            flexDirection: 'row',
                        }
                    }>
                <ImageButton src={iaoip} 
                    text={'IAIOP'}
                    noText={true}
                    link={'https://www.iaoip.org/page/Certification'}
                    imageStyle={imageStyle}/>
                <ImageButton src={pmi} 
                    text={'Project Management Institute'}
                    link={'https://www.pmi.org/certifications/types'}
                    imageStyle={imageStyle}
                    noText={true}/>
                <ImageButton src={ecbl} 
                    text={'European Business Competence License'}
                    link={'https://www.ebcl-international.eu'}
                    imageStyle={imageStyle}
                    noText={true}/>
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
    minWidth: '0',
    flex: '0 0 auto',
    flexDirection: 'column',
    padding: '2rem',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(0deg, #fff, rgba(96, 196, 176, 0.2))'
}

const logosContainerStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
}

// row container
const rowContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    flex: '1',
    alignItems: 'center',
    flexDirection: 'row',
}