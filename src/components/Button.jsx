import React from 'react';
import { useState } from 'react';
import R from 'res/R';

/**
 * A button component with an action.
 * @function
 */
export default function Button(props) {
    // grab the props,
    const { title, titleStyle, hover, image, idleColor, hoverColor } = props
    
    // set the text color with state,
    const [textColor, setTextColor] = useState(idleColor)

    // set the button color on hover,

    /**
     * Handles the mouse entering the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        // set the link color
        setTextColor(hoverColor)
    }

    /**
     * Handles the mouse leaving the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        // set the link color
        setTextColor(idleColor)
    }

    var textStyle = hover ? {...titleStyle,
        color: textColor
    }
    :
    {...titleStyle}

    const noImage =  hover ? 
                    <div style={rootStyle}
                        onMouseEnter={(event) => handleOnMouseEnter(event)}
                        onMouseLeave={(event) => handleOnMouseLeave(event)}>
                        <span style={textStyle}>{title}</span>
                    </div>
                    :
                    <div style={rootStyle}>
                        <span style={textStyle}>{title}</span>
                    </div>

    // return views,
    return (
        <React.Fragment>
            { image === undefined ? noImage : <img style={titleStyle} src={image}></img>
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