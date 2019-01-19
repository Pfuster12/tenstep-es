import React from 'react';
import AboutSection from './AboutSection';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ReferencesSection from './ReferencesSection';
import ResourcesSection from './ResourcesSection';
import ContactSection from './ContactSection';
import PartnersSection from './PartnersSection';
import IntroSection from './IntroSection';
/**
 * Handles the website's body content.
 * @function
 */
export default function Body() {
    // return views,
    return (
    <div style={rootStyle}>
        <IntroSection/>
        <AboutSection/>
        <ServicesSection/>
        <ReferencesSection/>
        <ResourcesSection/>
        <PartnersSection/>
        <ContactSection/>
        <Footer/>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    overflowY: 'scroll'
}