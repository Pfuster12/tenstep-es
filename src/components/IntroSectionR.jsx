import React from 'react';
import bannerImage from "../assets/nestor-morales-587950-unsplash.jpg";
import grain from "../assets/grain.png";
import R from 'res/R';
import Header from './Header';
import MediaQuery from 'react-responsive'

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
            alignItems: 'center',
            backgroundImage: `url("${bannerImage}"`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '30% 30%',
            backgroundSize: 'cover'
        }
        }>
        <div style={
            {
                flexDirection: 'column',
                backgroundSize: 'cover',
                backgroundImage: `url("${grain}")`,
            }
        }>
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
                {/* The first header */}
                <span style={
                    {
                        ...R.styles.heading,
                        textAlign: 'center',
                        color: R.colours.white,
                        fontSize: '36px',
                        margin: '32px',
                        opacity: 1,
                        fontWeight: 700
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
            </div>
        </div>
    </div>
    )
}