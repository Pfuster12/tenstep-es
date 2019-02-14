import React, {  useState } from 'react';
import R from 'res/R';

/**
 * Displays a reference box.
 * @function
 */
export default function ReferenceBox(props) {

    const { title, description } = props

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

    // return views,
    return (
    <div style={
            {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                //justifyContent: 'center',
                maxWidth: '400px',
                margin: '16px',
                padding: '24px',
                background: hover ? '#E6FAF9' : '#ff000000',
                borderRadius: '10px',
                cursor: 'pointer'
            }
        }
        onMouseEnter={event => handleOnMouseEnter(event)}
        onMouseLeave={event => handleOnMouseLeave(event)}>
        <span style={
            {
                ...R.styles.heading,
                fontSize: '24px',
                color: R.colours.primary,
                opacity: 1,
                fontWeight: 'bold'
            }
        }>
            {title}
        </span>
        <span style={
            {
                ...R.styles.text,
                marginTop: '12px'
            }
        }>
            {description}
        </span>
    </div>
    )
}