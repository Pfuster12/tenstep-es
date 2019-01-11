import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import R from 'res/R';
import Footer from './components/Footer';
import Body from './components/Body';

/**
 * The main App component.
 * @function
 */
export default function App() {

    // return the App views,
    return (
        <div style={rootStyle}>
            <Header/>
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
}

// Render the application into the DOM, the div inside index.html
ReactDOM.render(<App />, document.getElementById('root'))