import React from 'react';
import bannerImage from "../assets/nestor-morales-587950-unsplash.jpg";
import grain from "../assets/grain.png";
import R from 'res/R';
import Header from './Header';
import MediaQuery from 'react-responsive'
import BigButton from './BigButton';
import Button from './Button';
import logo from '../assets/logo.svg'

/**
 * Handles the intro section.
 * @function
 */
export default function IntroSectionR() {
    // return views,
    return (
    <div style={
        {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            backgroundImage: `url("${bannerImage}"`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '30% 30%',
            backgroundSize: 'cover'
        }
        }>
        {/* Grain background */}
        <div style={
            {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                backgroundSize: 'cover',
                backgroundImage: `url("${grain}")`,
            }
        }>
            {/* Darken background */}
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center', 
                    padding: '32px',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(36, 175, 99, 0.3)',
                    backgroundImage: 'linear-gradient(-15deg, rgba(53, 68, 178, 0.2) , rgba(5, 85, 115, 0.6))'
                }
            }>
                <MediaQuery query="(min-width: 1000px)">
                    <Header/>
                </MediaQuery>
                <MediaQuery query="(max-width: 1000px)">
                    <Button image={logo}
                    titleStyle={imageStyle}/>
                <Button title={R.strings.corpsolutions}
                    titleStyle={headingStyle}
                hover={false}/>
                </MediaQuery>
                {/* The first header */}
                <span style={
                    {
                        ...R.styles.heading,
                        textAlign: 'center',
                        color: R.colours.white,
                        // adds a min font size of 24px and the rest is viewport relative,
                        fontSize: 'calc(26px + 1vw)',
                        margin: '48px',
                        opacity: 1,
                        fontWeight: 700,
                        lineHeight: '1.4em'
                    }
                }>
                    Innovation and Economic Development Consulting in Emerging Countries
                </span>
                {/* The second header */}
                <span style={
                    {
                        ...R.styles.text,
                        textAlign: 'center',
                        color: R.colours.white,
                        fontWeight: 700,
                        margin: '32px',
                        opacity: 1,
                        fontSize: '18px',
                    }
                }>
                    With work spanning more than 100 countries and the TenStep network, we can offer help in any part of the world.
                </span>
                <BigButton text={"Contact and request resources"}
                    color={R.colours.accent}
                    highlightColor={R.colours.accentLighter}
                    width={'250px'}
                    height={'50px'}
                    margin={'40px'}/>
            </div>
        </div>
    </div>
    )
}

// image style,
const imageStyle = {...R.styles.heading,
    width: '46px',
    height: '50px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    fontWeight: 'bold',
    paddingLeft: '1rem',
    marginRight: '1rem',
    textOverflow: 'ellipsis',
    color: R.colours.white
}