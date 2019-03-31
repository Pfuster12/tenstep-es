import React from 'react';
import R from 'res/R';
import MediaQuery from 'react-responsive'

/**
 * Handles the website's footer.
 * @function
 */
export default function Footer(props) {

    const { policyCallback } = props

    function openLinkedIn(event) {
        window.open("https://www.linkedin.com/in/juliofuster", '_blank')
    }

    function openTwitter(event) {
        window.open("https://twitter.com/juliofuster?lang=en", '_blank')
    }

    // return views,
    return (
    <div style={rootStyle}>
    <MediaQuery query="(min-width: 1000px)">
        <div style={columnStyle}>
            <span style={
                {...R.styles.text,
                    color: R.colours.white,
                    opacity: 1,
                    fontSize: '12px',
                    padding: '8px',
                    fontWeight: '700'
                }
            }>{'Corporate Solutions S.A.'}</span>
            <span style={textStyle}>{R.strings.copyright}</span>
            <span style={textStyle}>Calle Mauricio Legendre 6 7C, 28046, Madrid, Spain</span>
        </div>
        <div style={{display: 'flex'}}>
        <span onClick={openLinkedIn} style={{...textStyle, fontWeight: 'bold', cursor: 'pointer'}}>Follow us in LinkedIn</span>
        <span onClick={openTwitter} style={{...textStyle, fontWeight: 'bold', cursor: 'pointer'}}>Twitter</span>
            </div>
            <span onClick={policyCallback}
             style={{...textStyle, fontWeight: 'bold', cursor: 'pointer',}}>Privacy Policy</span>
    </MediaQuery>
    <MediaQuery query="(max-width: 1000px)">
            <span style={{...R.styles.text,
                    color: R.colours.white,
                    opacity: 1,
                    fontSize: '12px',
                    padding: '8px',
                    fontWeight: '700'
                }}>{'Corporate Solutions S.A.'}</span>
            <span style={textStyle}>{R.strings.copyright}</span>
            <span style={textStyle}>Calle Mauricio Legendre 6, 7C, 28046, Madrid, Spain</span>
            <div style={{display: 'flex'}}>
                <span onClick={openLinkedIn} style={{...textStyle, fontWeight: 'bold', cursor: 'pointer'}}>Follow us in LinkedIn</span>
                <span onClick={openTwitter} style={{...textStyle, fontWeight: 'bold', cursor: 'pointer'}}>Twitter</span>
            </div>
            <span style={{...textStyle, fontWeight: 'bold',cursor: 'pointer',}}
                onClick={policyCallback}>Privacy Policy</span>
    </MediaQuery>
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
    alignItems: 'center',
    padding: '16px',
    backgroundColor: R.colours.primaryDarker
}

const columnStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
}

// heading style,
const textStyle = {...R.styles.text,
    color: R.colours.white,
    fontSize: '12px',
    padding: '8px',
    opacity: 0.8
}