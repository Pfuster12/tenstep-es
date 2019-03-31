import React from 'react';
import AboutSection from './AboutSection';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ReferencesSection from './ReferencesSection';
import ResourcesSection from './ResourcesSection';
import ContactSection from './ContactSection';
import PartnersSection from './PartnersSection';
import TrainingSection from './TrainingSection';
import Header from './Header';
import IntroSectionR from './IntroSectionR';
import AboutSectionR from './AboutSectionR';
/**
 * Handles the website's body content.
 * @function
 */
export default function Body(props) {

    const { policyCallback } = props
    // return views,
    return (
    <div style={rootStyle}>
                <IntroSectionR/>
                <AboutSectionR/>
                <ServicesSection/>
                <TrainingSection/>
                <ReferencesSection/>
                <ResourcesSection/>
                <PartnersSection/>
                <ContactSection/>
                <Footer policyCallback={policyCallback}/>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    alignItems: 'stretch',
    flexDirection: 'column',
}