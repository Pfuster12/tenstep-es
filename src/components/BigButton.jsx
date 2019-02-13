import React from 'react';
import { useState } from 'react';
import R from 'res/R';
/**
 * Custom button handling an action.
 * @function
 */
export default function BigButton(props) {
    // grab the props
    const { text, color, highlightColor, width, height, margin } = props
    // use state for the hover color,
    const [buttonColor, setButtonColor] = useState(color)

    /**
     * Handles the mouse entering the tab element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        setButtonColor(highlightColor)
    }

    /**
     * Handles the mouse leaving the tab element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        setButtonColor(color)
    }

    // define the style here to change button color on hover,
    const rootStyle = {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        borderRadius: '4px',
        height: height,
        width: width,
        margin: margin,
        // set the color as state,
        backgroundColor: buttonColor,
        cursor: 'pointer'
    }

    // return views,
    return (
    <div style={rootStyle}
        onMouseEnter={event => handleOnMouseEnter(event)}
        onMouseLeave={event => handleOnMouseLeave(event)}>
        <div style={textStyle}>{text}</div>
    </div>
    )
}

//
// Styles for the ViewPager component.
//
//

// title style inherits from heading global style,
const textStyle = {...R.styles.buttonText, ...{
    display: 'flex',
    fontSize: '12px',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    color: R.colours.white,
    textTransform: 'uppercase'
    }
}
