import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import R from 'res/R';
import Body from './components/Body';
import { useState } from "react";
import posed, { PoseGroup } from 'react-pose'
import StickyHeader from './components/StickyHeader';

/**
 * The main App component.
 * @function
 */
export default function App() {
    // use state for the sticky header
    const [sticky, setSticky] = useState(false)

    function handleScroll(event) {
        console.log(event.currentTarget.scrollTop)
        const scrollY = event.currentTarget.scrollTop
        if (scrollY > 600) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    // return the App views,
    return (
        <div style={rootStyle}
            onScroll={(event) => handleScroll(event)}>
            <StickyHeader sticky={sticky}/>
            <Body/>
        </div>
    )
}

//
// Styles for the App component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowY: 'scroll'
}

// Render the application into the DOM, the div inside index.html
ReactDOM.render(<App />, document.getElementById('root'))