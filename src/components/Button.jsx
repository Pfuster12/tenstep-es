import React from 'react';
import { useState } from 'react';
import R from 'res/R';

/**
 * A button component with an action.
 * @function
 */
export default function Button(props) {
    // grab the props,
    const { title, titleStyle, hover } = props
    
    // set the text color with state,
    const [textColor, setTextColor] = useState(R.colours.dark)


    // set the button color on hover,

    /**
     * Handles the mouse entering the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        // set the link color
        setTextColor(R.colours.primary)
    }

    /**
     * Handles the mouse leaving the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        // set the link color
        setTextColor(R.colours.dark)
    }

    var textStyle = {...titleStyle,
        color: textColor
    }

    // return views,
    return (
        <React.Fragment>
            { hover ? 
            <div style={rootStyle}
                onMouseEnter={(event) => handleOnMouseEnter(event)}
                onMouseLeave={(event) => handleOnMouseLeave(event)}>
                <span style={textStyle}>{title}</span>
            </div>
            :
            <div style={rootStyle}>
                <span style={textStyle}>{title}</span>
            </div>
            }
        </React.Fragment>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    cursor: 'pointer'
}