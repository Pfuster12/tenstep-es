import React, { useState } from 'react';
import R from 'res/R';
/**
* Displays an image with text.
* @function
 */
export default function ImageButton(props) {
    // get src
    const { src, text, link } = props

    const [hover, setHover] = useState(false)

     /**
     * Handles the mouse entering the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        // set the link color
        setHover(true)
    }

    /**
     * Handles the mouse leaving the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        // set the link color
        setHover(false)
    }

    /**
     * Handles the mouse clicking the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnClick(event) {
        // set the link to open in a new tab,
        window.open(link, "_blank")
    }

    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        height: 'auto',
        margin: '8px',
        padding: '10px',
        cursor: 'pointer'
    }

    // return views,
    return (
    <div style={rootStyle}
        onMouseEnter={(event) => handleOnMouseEnter(event)}
        onMouseLeave={(event) => handleOnMouseLeave(event)}
        onClick={event => handleOnClick(event)}>
        <img style={imageStyle} src={src}></img>
        {/*<span style={textStyle}>{text}</span>*/}
    </div>
    )
}

// image container
const imageStyle = {
    display: 'flex',
    width: '200px',
    alignSelf: 'center',
    height: 'auto',
    margin: '0px'
}

// heading style,
const textStyle = {...R.styles.text,
    padding: '1rem',
    textAlign: 'center'
}