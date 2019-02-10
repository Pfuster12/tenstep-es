import React from 'react';
import R from 'res/R';
/**
* Displays a title with a small description below it.
* @function
 */
export default function Title(props) {
    // get the text
    const { title, text, text2, strokeColor } = props

    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: '42px',
        maxWidth: '480px',
        padding: '1rem',
        fontWeight: 'bold',
        color:  strokeColor !== undefined ? strokeColor : R.colours.primary
    }

    // heading style,
    const textStyle = {...R.styles.text,
        width: '500px',
        padding: '1rem',
        color: strokeColor !== undefined ? strokeColor : '#000'
    }

    // return views,
    return (
    <div style={rootStyle}>
    <span style={headingStyle}>{title}</span>
    <svg style={lineStyle} width={100} height={9}>
                <line x1={0} y1={0} x2={200} y2={0} 
                    style={
                        { 
                            stroke: strokeColor !== undefined ? strokeColor : R.colours.primary,
                            strokeWidth: '9px'
                        }
                    }>
                </line>
            </svg>
            <span style={textStyle}>{text}</span>
            <span style={textStyle}>{text2}</span>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    width: 'auto',
    flexDirection: 'column',
}

const lineStyle = {
    marginLeft: '1rem'
}