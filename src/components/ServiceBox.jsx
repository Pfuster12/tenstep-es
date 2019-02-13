import React from 'react';
import R from 'res/R';
/**
 * Displays information about a service with an image a title and a
 * short description on the side.
 * @function
 */
export default function ServiceBox(props) {
    // get the props
    const { src, heading, text } = props
    // return views,
    return (
    <div style={rootStyle}>
        <img src={src}></img>
        <div style={textContainer}>
            <p style={headingStyle}>{heading}</p>
            <svg style={lineStyle} width={100} height={9}>
                <line x1={0} y1={0} x2={200} y2={0} 
                    style={
                        { 
                            stroke: '#FBF0F1',
                            strokeWidth: '9px'
                        }
                    }>
                </line>
            </svg>
            <span style={textStyle}>{text}</span>
        </div>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    maxWidth: '500px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
}

const lineStyle = {
    marginLeft: '1rem'
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
    fontWeight: '700',
    color: R.colours.primaryDarker
}

// text style,
const textStyle = {...R.styles.text,
    display: 'flex',
    fontSize: '16px',
    padding: '0.5rem',  
}