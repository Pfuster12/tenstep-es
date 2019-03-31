import React from 'react';
/**
 * Display a partner logo with link
 * @function
 */
export default function PartnerLogo(props) {

    /**
     * Props.
     */
    const { src, link, style } = props

    /**
     * Handles the logo click to open a window.
     * @param {SyntheticEvent} event click
     */
    function onClick(event) {
        window.open(link, "_blank")
    }

    // return views,
    return (
        <img onClick={onClick} style={style} src={src}></img>
    )
}