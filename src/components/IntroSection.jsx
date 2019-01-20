import React from 'react';
import R from 'res/R';
import BigButton from './BigButton';
import rocket from '../assets/rocketto.svg'
import MediaQuery from 'react-responsive'
import bannerImage from "../assets/nestor-morales-587950-unsplash.jpg";
import grain from "../assets/grain.png";


/**
 * Displays the first segment below the header.
 * @function
 */
export default function IntroSection() {
    // return views,
    return (
    <div style={rootStyle}>
        <div style={grainContainer}>
        <div style={bannerDarkening}>
        <p style={headingStyle}>Innovation and Economic Development Consulting in Emerging Countries</p>
                <p style={textStyle}>With work spanning more than 100 countries and the TenStep network, we can offer help in any part of the world.</p>
                <div style={buttonContainerStyle}>
                <BigButton text={"Contact and request resources"}
                    color={R.colours.accent}
                    highlightColor={R.colours.accentLighter}
                    width={'250px'}
                    height={'50px'}/>
                </div>
                </div>
        </div>
</div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: '0 0 500px',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: R.colours.primaryDarker,
    backgroundImage: `url("${bannerImage}"`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30% 30%',
    backgroundSize: '100% auto'
    //backgroundImage: 'linear-gradient(-15deg, #032b59,  #032d4d, #032b39)'
}

const buttonContainerStyle = {
    display: 'flex',
    flex: '0 0 250px',
    margin: '1rem'
}

const grainContainer = {
    display: 'flex',
    flex: '0 0 500px',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundSize: '100% auto',
    backgroundImage: `url("${grain}")`,
}

const bannerDarkening = {
    display: 'flex',
    flex: '0 0 436px',
    padding: '32px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(36, 175, 99, 0.3)',
    backgroundImage: 'linear-gradient(-15deg, rgba(53, 68, 178, 0.2) , rgba(5, 85, 115, 0.6))'
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
    fontWeight: 'bold',
    opacity: 1,
    width: '600px',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    color: R.colours.white
}
