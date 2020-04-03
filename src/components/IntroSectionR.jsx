import React from 'react';
import bannerImage from "../assets/topbanner.jpg";
import R from 'res/R';
import Header from './Header';
import MediaQuery from 'react-responsive'
import BigButton from './BigButton';
import Button from './Button';
import logo_pyramid from '../assets/pyramid_logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

/**
 * Handles the intro section.
 * @function
 */
export default function IntroSectionR() {
    // return views,
    return (
    <div className="intro" style={
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
            }
        }>
            {/* Darken background */}
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center', 
                    backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(180deg, rgba(63, 120, 186, 0.96), rgba(63, 120, 186, 0.7))',
                }
            }>
                <MediaQuery query="(max-width: 900px)">
                <div style={{
                    display: 'flex', 
                    flex: 1,
                    width: '100%',
                    backgroundColor: '#fff',
                    height: 'auto',
                    padding: '12px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 2px 6px grey'
                    }}>
                        <Button image={logo_pyramid}
                            titleStyle={imageStyle}/>
                        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Button title={'tenstep'}
                            titleStyle={headingStyle}
                        hover={false}/>
                        <span style={headingSmallStyle}>corporate solutions</span>
                        </div>
                    </div>
                </MediaQuery>
                {/* The first header */}
                <span style={
                    {
                        ...R.styles.heading,
                        textAlign: 'center',
                        color: '#F6F5EC',
                        // adds a min font size of 24px and the rest is viewport relative,
                        fontSize: 'calc(30px + 1vw)',
                        marginTop: '160px',
                        marginBottom: '80px',
                        marginLeft: '48px',
                        marginRight: '48px',
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
                    With work spanning more than 100 countries and the TenStep network, we can offer
                     help in any part of the world.
                </span>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <iframe
                    src="https://cdn.intelligence.weforum.org/iframe.html?openinnewwindow=true&text=COVID-19&apikey=beb0cd39-720d-43be-9307-1bb1950f7eea"
                    style={{padding: '16px', margin: '16px', border:'0px solid white', backgroundColor: 'white', borderRadius: '6px'}}
                    name="intelligenceWidgetIframe"
                    scrolling="no"
                    frameBorder="0px"
                    marginHeight="0px"
                    marginWidth="0px"
                    height="50px"
                    width="300px"
                    >
                    </iframe>
                <span style={{
                    ...R.styles.text,
                    backgroundColor: 'rgba(196, 148, 0, 0.6)',
                    border: 'solid 1px rgba(196, 148, 0)',
                    borderRadius: '6px',
                    marginTop: '2px',
                    marginLeft: '64px',
                    marginRight: '64px',
                    fontSize: '14px',
                    padding: '20px',
                    opacity: 1,
                    color: R.colours.white
                }}>
                    We hope all our clients, partners and associated consultants stay safe during 
                    this difficult period of COVID-19 pandemic, and assure them we continue our work
                    online, and on the field when travel is allowed again. We are actively mentoring
                    firms and institutions through our internationally and privately-funded projects 
                    on how to confront the social distancing and expected post-crisis economic restructuring periods.
                </span>
                </div>
            <Link  activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                <BigButton text={"Contact and request resources"}
                    color={R.colours.tenstepRedLighter}
                    enabled={true}
                    highlightColor={R.colours.tenstepRedLighterer}
                    width={'250px'}
                    height={'50px'}
                    margin={'80px'}/>
                    <div style={{height: '60px', maxWidth: '100px'}}/>
                    </Link>
            </div>
        </div>
    </div>
    )
}

// image style,
const imageStyle = {...R.styles.heading,
    width: '40px',
    height: '34px',
    padding: '12px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '34px',
    fontWeight: 'bold',
    paddingLeft: '2px',
    marginTop: '24px',
    marginRight: '1rem',
    textOverflow: 'ellipsis',
    color: R.colours.tenstepBlue
}

// heading style,
const headingSmallStyle = {...R.styles.heading,
    fontSize: '24px',
    fontWeight: '900',
    paddingLeft: '0.2rem',
    marginRight: '1rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: R.colours.tenstepBlue
}
