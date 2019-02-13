import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import R from 'res/R';
import Body from './components/Body';
import { useState } from "react";
import posed, { PoseGroup } from 'react-pose'
import StickyHeader from './components/StickyHeader';
import IntroSectionR from './components/IntroSectionR';
import AboutSectionR from './components/AboutSectionR';
import ServicesSection from './components/ServicesSection';
import TrainingSection from './components/TrainingSection';
import ReferencesSection from './components/ReferencesSection';
import ResourcesSection from './components/ResourcesSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

/**
 * The main App component.
 * @function
 */
export default function App() {
    // use state for the sticky header
    const [sticky, setSticky] = useState(false)

    function handleScroll(event) {
        console.log(event.currentTarget.scrollTop)
        const scrollY = event.currentTarget.scrollTop
        if (scrollY > 600) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    // create a posed div,
    const Container = posed.div({
        enter: { 
            y: '0px', 
            opacity: 1, 
            transition: {
                duration: 500
            }
        },
        exit: { 
            y: '-200px', 
            opacity: 0, 
            transition: { 
                duration: 500 
            } 
        }
        })

        const containerStyle = {
            display: 'flex',
            height: '80px',
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
            position: 'fixed',
            width: '100%',
            zIndex: 2,
            backgroundColor: R.colours.primary
        }
    

    // return the App views,
    return (
        /*<div style={rootStyle}
            onScroll={(event) => handleScroll(event)}>
            <PoseGroup>
                {sticky && <Container style={containerStyle} key={'header'}>
                    <StickyHeader key={'sticky-header'}/>
                </Container>}
            </PoseGroup>
            <Body/>
        </div>*/
        <div style={
                {
                    width: '100%',
                    height: '100%',
                    overflowY: 'scroll',
                    alignItems: 'center'
                }
            }>
                <IntroSectionR/>
                <AboutSectionR/>
                <ServicesSection/>
                <TrainingSection/>
                <ReferencesSection/>
                <ResourcesSection/>
                <PartnersSection/>
                /<ContactSection/>
                <Footer/>
        </div>
    )
}

// Render the application into the DOM, the div inside index.html
ReactDOM.render(<App />, document.getElementById('root'))