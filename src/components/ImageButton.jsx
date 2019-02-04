import React, { useState } from 'react';
import R from 'res/R';
/**
* Displays an image with text.
* @function
 */
export default function ImageButton(props) {
    // get src
    const { src } = props

    const [shadowHeight, setShadowHeight] = useState('4px')

     /**
     * Handles the mouse entering the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        // set the link color
        setShadowHeight('10px')
    }

    /**
     * Handles the mouse leaving the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        // set the link color
        setShadowHeight('4px')
    }

    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        wflex: 1,
        alignSelf: 'center',
        height: 'auto',
        margin: '16px',
        padding: '10px'
    }

    // return views,
    return (
    <div style={rootStyle}
        onMouseEnter={(event) => handleOnMouseEnter(event)}
        onMouseLeave={(event) => handleOnMouseLeave(event)}>
        <img style={imageStyle} src={src}></img>
    </div>
    )
}

// image container
const imageStyle = {
    display: 'flex',
    width: '200px',
    alignSelf: 'center',
    height: 'auto',
    margin: 'auto'
}

// heading style,
const textStyle = {...R.styles.text,
    padding: '1rem'
}