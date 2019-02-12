import React from 'react';
import R from 'res/R';
/**
* Displays an image cropped with text below.
* @function
 */
export default function ProfileImage(props) {
    const { text, src, location } = props
    // return views,
    return (
    <div style={rootStyle}>
        <div style={imageContainerStyle}>
            <img style={imageStyle} src={src}></img>
        </div>
        <span style={textStyle}>{text}</span>
        <span style={text2Style}>{location}</span>
    </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    padding: '1rem'
}

// images div style
const imageStyle = {
    display: 'block',
    height: 'auto',
    width: '100px'
}

const imageContainerStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    position: 'relative',
    overflow: 'hidden'
}

// heading style,
const textStyle = {...R.styles.text,
    fontSize: '1rem',
    paddingTop: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: R.colours.darkGrey
}

// heading style,
const text2Style = {...R.styles.text,
    fontSize: '1rem',
    textAlign: 'center',
    color: R.colours.darkGrey
}