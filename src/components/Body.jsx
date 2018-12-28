import React from 'react';
import AboutSection from './AboutSection';
/**
 * Handles the website's body content.
 * @function
 */
export default function Body() {
    // return views,
    return (
    <div style={rootStyle}>
        <AboutSection/>
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
}