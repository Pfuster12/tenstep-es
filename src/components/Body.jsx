import React from 'react';
import AboutSection from './AboutSection';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ReferencesSection from './ReferencesSection';
import ResourcesSection from './ResourcesSection';
import ClientsSection from './ClientsSection';
import ContactSection from './ContactSection';
/**
 * Handles the website's body content.
 * @function
 */
export default function Body() {
    // return views,
    return (
    <div style={rootStyle}>
        <AboutSection/>
        <ServicesSection/>
        <ReferencesSection/>
        <ResourcesSection/>
        <ClientsSection/>
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
    flexDirection: 'column',
    overflowY: 'scroll'
}