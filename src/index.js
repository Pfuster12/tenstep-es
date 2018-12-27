import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

/**
 * The main App component.
 * @function
 */
export default function App() {

    // return the App views,
    return (
        <div style={rootStyle}>
            <Header/>
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
    alignItems: 'center'
}

// Render the application into the DOM, the div inside index.html
ReactDOM.render(<App />, document.getElementById('root'))