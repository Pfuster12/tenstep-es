import React from 'react';
/**
 * A button component with an action.
 * @function
 */
export default function Button(props) {
    // grab the props,
    const { title, titleStyle } = props

    /**
     * Handles the mouse entering the tab element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseEnter(event) {
        //
    }

    /**
     * Handles the mouse leaving the tab element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeave(event) {
        //
    }

    // return views,
    return (
        <div style={rootStyle}
            onMouseEnter={(event) => handleOnMouseEnter(event)}
            onMouseLeave={(event) => handleOnMouseLeave(event)}>
            <span style={titleStyle}>{title}</span>
        </div>
    )
}

//
// Styles for the component.
//
const rootStyle = {
    cursor: 'pointer'
}