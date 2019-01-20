import React from 'react';
import R from 'res/R';
import BigButton from './BigButton';
import rocket from '../assets/rocketto.svg'

/**
 * Displays the first segment below the header.
 * @function
 */
export default function IntroSection() {
    // return views,
    return (
    <div style={rootStyle}>
            <p style={headingStyle}>Innovation and Economic Development Consulting in Emerging Countries</p>
            <p style={textStyle}>With work spanning more than 100 countries and the TenStep network, we can offer help in any part of the world.</p>
            <div style={buttonContainerStyle}>
            <BigButton text={"Contact and request resources"}
                color={R.colours.accent}
                highlightColor={R.colours.accentLighter}
                width={'250px'}
                height={'50px'}/>
            </div>
            <img style={imageStyle} src={rocket}></img>
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
    alignItems: 'center',
    padding: '2rem',
    backgroundImage: 'linear-gradient(-15deg, #032b59,  #032d4d, #032b39)'
}

const buttonContainerStyle = {
    display: 'flex',
    flex: '0 0 250px',
    margin: '1rem'
}

const imageStyle = {
    width: '280px',
    height: '280px',
    bottom: '360px',
    right: '100px',
    position: 'relative',
    alignSelf: 'flex-end',
    color: R.colours.white
}


  // heading style,
  const headingStyle = {...R.styles.heading,
    fontSize: '36px',
    padding: '1rem',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    color: R.colours.white
}

// text style,
const textStyle = {...R.styles.text,
    fontSize: '18px',
    padding: '1rem',
    opacity: 1,
    width: '600px',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    color: R.colours.white
}
