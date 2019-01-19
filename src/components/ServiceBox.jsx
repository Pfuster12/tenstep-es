import React from 'react';
import R from 'res/R';
/**
 * Displays information about a service with an image a title and a
 * short description on the side.
 * @function
 */
export default function ServiceBox(props) {
    // get the props
    const { src } = props
    // return views,
    return (
    <div style={rootStyle}>
        <img src={src}></img>
        <div style={textContainer}>
        <p style={headingStyle}>Design and development</p>
            <span style={textStyle}>We consult in the development of industrial and
             science technology parks, incubation and technology centres.</span>
        </div>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    width: '500px',
    height: 'auto',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
}

const textContainer = {
    display: 'flex',
    flex: 1,
    margin: '1rem',
    flexDirection: 'column',
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '20px',
    padding: '1rem',
    margin: '0px',
    fontWeight: '700'
}

// text style,
const textStyle = {...R.styles.text,
    display: 'flex',
    fontSize: '16px',
    padding: '1rem',  
}