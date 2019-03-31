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
import MediaQuery from 'react-responsive'
import ContactSection from './components/ContactSection';
import PrivacyPolicyDialog from './components/PrivacyPolicyDialog';

/**
 * The main App component.
 * @function
 */
export default function App() {

    const [showPolicy, setShowPolicy] = useState(false)

    function policyCallback() {
        setShowPolicy(true)
    }

    function closePolicy() {
        setShowPolicy(false)
    }
    
    // return the App views,
    return (
        <div style={
                {
                    alignItems: 'center',
                }
            }>
             <MediaQuery query="(min-width: 900px)">
                    <Header/>
                </MediaQuery>
                {showPolicy ? <PrivacyPolicyDialog hidePolicy={closePolicy}/> : <React.Fragment/>}
               <Body policyCallback={policyCallback}/>
        </div>
    )
}

// Render the application into the DOM, the div inside index.html
ReactDOM.render(<App/>, document.getElementById('root'))