import React, { useState } from 'react';
import R from 'res/R';
import Tippy from '@tippy.js/react'

/**
* Displays an image with text.
* @function
 */
export default function ImageButton(props) {
    // get src
    const { src, text, link, imageStyle, noText } = props

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

    // create a tooltip with Tippy.js
    const TooltipWithProps = () => (
        <Tippy content={<span style={R.styles.text}>{text}</span>}
            arrow={true}
            theme={'light'}>
            <div style={rootStyle}
                onMouseEnter={(event) => handleOnMouseEnter(event)}
                onMouseLeave={(event) => handleOnMouseLeave(event)}
                onClick={event => handleOnClick(event)}>
                <img style={imageStyle} src={src}></img>
                { !noText ? <span style={textStyle}>{text}</span> : <React.Fragment/>}
            </div>
        </Tippy>
      )

    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        height: 'auto',
        margin: '8px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: hover ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        borderRadius: '6px'
    }

    // return views,
    return (
    <React.Fragment>
        <TooltipWithProps/>
    </React.Fragment>
    )
}

// heading style,
const textStyle = {...R.styles.text,
    padding: '1rem',
    textAlign: 'center',
    color: R.colours.white,
    maxWidth: '300px',
    maxHeight: '100px'
}