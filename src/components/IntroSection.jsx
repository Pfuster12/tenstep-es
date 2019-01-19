import React from 'react';
import R from 'res/R';
/**
 * Displays the first segment below the header.
 * @function
 */
export default function IntroSection() {
    // return views,
    return (
    <div style={rootStyle}>
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
    padding: '2rem',
    backgroundColor: R.colours.primary
}