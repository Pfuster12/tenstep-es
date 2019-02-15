import React, {  useState } from 'react';
import R from 'res/R';

/**
 * Displays a reference box.
 * @function
 */
export default function ReferenceBox(props) {

    const { title, description, src, link } = props

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
    * Handles the onclick.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
   function handleOnClick(event) {
    // set the link to open in a new tab,
    link !== undefined && window.open(link, "_blank")
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
                margin: '1vw',
                padding: '1vw',
                background: hover ? 'rgba(230,250,249, 0.5)' : '#ff000000',
                borderRadius: '10px',
                cursor: 'pointer'
            }
        }
        onClick={event => handleOnClick(event)}
        onMouseEnter={event => handleOnMouseEnter(event)}
        onMouseLeave={event => handleOnMouseLeave(event)}>
        { 
            src !== undefined && <img 
                                style={
                                    {
                                        width: '100px',
                                        height: '100px',
                                        alignSelf: 'center'
                                    }
                                }
                                src={src}/>
         }
        <span style={
            {
                ...R.styles.heading,
                fontSize: '24px',
                color: R.colours.primary,
                opacity: 1,
                marginTop: '22px',
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