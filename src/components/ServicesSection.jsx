import React from 'react';
import R from 'res/R';
import rocket_service from '../assets/rocket_service.svg'
import regional_service from '../assets/regional_service.svg'
import sme_service from '../assets/sme_service.svg'
import improve_service from '../assets/improve_service.svg'
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
            <ServiceBox heading={"Design and Development"}
                text={"We consult in the development of industrial and science technology parks, incubation and technology centres."}
                src={rocket_service}/>
            <div style={endServiceContainerStyle}>
                <ServiceBox heading={"Small and Medium Enterprise (SMEs)"}
                    text={"We work with and support Small and Medium Enterprise and consult on entrepreneurship policies and support programs."}
                    src={sme_service}/>
            </div>
            <ServiceBox heading={"Regional and Smart Strategies"}
                text={"Our work with the EU Regional framework delivers Regional Innovation Strategies (RIS) and Smart Specialization Strategies (S3)."}
                src={regional_service}/>
            <div style={endServiceContainerStyle}>
                <ServiceBox heading={"Improving Business Environment"}
                text={"Competitiveness, simplification and improvement of a country or region’s business environment is our goal."}
                src={improve_service}/>
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
        alignSelf: 'center',
        maxWidth: '900px',
        flex: '0 0 auto',
        flexDirection: 'column',
        padding: '2rem'
    }

    const endServiceContainerStyle = {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end'
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
        width: '500px',
        padding: '1rem'
    }