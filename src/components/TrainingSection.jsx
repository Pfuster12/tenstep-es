import React, { useState } from 'react';
import R from 'res/R';
import ServiceBox from './ServiceBox';
import iaoip from '../assets/iaoip_logo.png'
import pmi from '../assets/pmi_logo.png'
import ecbl from '../assets/ecbl_logo.png'
import Title from './Title';
import Button from './Button';
import ImageButton from './ImageButton';

/**
 * Displays the body Services section.
 * @function
 */
export default function TrainingSection() {

    //TODO a would you like to hear more from us. or request please sign in form little div not too high.
    // return views,
    return (
        <div style={rootStyle}>
        <div style={rowContainerStyle}>
            <Title title={"Our Training and Capacity Building Services"}
                    text={"We are a Preferred/Registered Education Provider of both the International Association of Innovation Professionals (IAOIP.org) and of the Project Management Institute (PMI.org). We can prepare you for such certifications as Certified Innovation Professional or Innovation Management (IAOIP), Project Management Professional (PMP), Agile Project Management, Project Cycle Management, Monitoring and Evaluation...etc"}/>
           <div style={logosContainerStyle}>
                <ImageButton src={iaoip}/>
                <ImageButton src={pmi}/>
                <ImageButton src={ecbl}/>
               </div>
        </div>
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
    flex: '1',
    alignItems: 'center',
    flexDirection: 'row',
}