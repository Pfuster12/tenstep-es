import React, { useState } from 'react';
import chevron_r from '../assets/chevron_right.svg'
import chevron_l from '../assets/chevron_left.svg'
import posed, { PoseGroup } from 'react-pose'

/**
 * Displays a page than can be side scrolled like a viewpager.
 * @function
 */
export default function SideScroller(props) {
    const { children, page1, page2 } = props

    const [hoverLeft, setHoverLeft] = useState(false)
    const [hoverRight, setHoverRight] = useState(false)
    const [page, setPage] = useState(1)

    /**
    * Handles the mouse entering the element.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
   function handleOnMouseEnter(event) {
       // hover true,
       setHoverLeft(true)
   }

   /**
    * Handles the mouse leaving the element.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
   function handleOnMouseLeave(event) {
       // hover false,
       setHoverLeft(false)
   }

    /**
    * Handles the mouse entering the element.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
    function handleOnMouseEnterRight(event) {
        // hover true,
        setHoverRight(true)
    }

    /**
     * Handles the mouse leaving the element.
     * @param {React.SyntheticEvent} event of the onMouseEnter.
     */
    function handleOnMouseLeaveRight(event) {
        // hover false,
        setHoverRight(false)
    }

    /**
    * Handles the mouse click on left chevron.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
   function handleOnClickLeft(event) {
       page === 1 ? setPage(2) : setPage(1)
    }

        /**
    * Handles the mouse click on left chevron.
    * @param {React.SyntheticEvent} event of the onMouseEnter.
    */
   function handleOnClickRight(event) {
    page === 1 ? setPage(2) : setPage(1)
 }

       // chevron style,
       const chevron2Style = {
        display: 'flex',
        flex: 1,
        minWidth: '60px',
        backgroundColor: hoverRight ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        borderRadius: '6px',
        cursor: 'pointer'
    }

    const Pager = posed.div({
        enter:{
            opacity: 1,
            x: '0px',
            transition: { 
                duration: 500 
            } 
        },
        exit: {
            opacity: 0,
            x: '-100px',
            transition: { 
                duration: 500 
            } 
        }
    })


    // return views,
    return (
    <div style={rootStyle}>
            <PoseGroup animateOnMount={false}>
                {page === 1 ? 
                     <Pager initialPose="enter" pose="exit" key={"pager"}>{page1}</Pager> 
                     : <Pager initialPose="enter" pose="exit" key={'pager-2'}>{page2}</Pager>}   
            </PoseGroup>
        <img onMouseEnter={event => handleOnMouseEnterRight(event)} 
            onMouseLeave={event => handleOnMouseLeaveRight(event)}
            onClick={event => handleOnClickRight(event)}
            style={chevron2Style} 
            src={chevron_r}></img>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
}