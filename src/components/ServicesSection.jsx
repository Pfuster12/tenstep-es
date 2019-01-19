import React from 'react';
import R from 'res/R';
import rocket_service from '../assets/rocket_service.svg'
import ServiceBox from './ServiceBox';
/**
 * Displays the body Services section.
 * @function
 */
export default function ServicesSection() {

    //TODO a would you like to hear more from us. or request please sign in form little div not too high.
    // return views,
    return (
        <div style={rootStyle}>
            <span style={headingStyle}>Our consulting services focus on innovation and economic development.</span>
            <ServiceBox src={rocket_service}/>
        </div>
        )
    }
    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        flex: '0 0 400px',
        flexDirection: 'column',
        padding: '2rem'
    }
    
    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: '2rem',
        padding: '1rem',
        fontWeight: 'bold',
        textAlign: 'center'
        }
    
    // heading style,
    const textStyle = {...R.styles.text,
        width: '496px',
        padding: '1rem'
    }