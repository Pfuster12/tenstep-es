import React from 'react';
import R from 'res/R';
import MediaQuery from 'react-responsive'

/**
 * Handles the website's footer.
 * @function
 */
export default function Footer() {
    // return views,
    return (
    <div style={rootStyle}>
    <MediaQuery query="(min-width: 1000px)">
        <div style={columnStyle}>
            <span style={
                {...R.styles.text,
                    color: R.colours.white,
                    opacity: 1,
                    fontSize: '12px',
                    padding: '8px',
                    fontWeight: '700'
                }
            }>{'Corporate Solutions S.A.'}</span>
            <span style={textStyle}>{R.strings.copyright}</span>
        </div>
            <a style={{...textStyle,}}>Privacy Policy</a>
    </MediaQuery>
    <MediaQuery query="(max-width: 1000px)">
            <span style={{...R.styles.text,
                    color: R.colours.white,
                    opacity: 1,
                    fontSize: '12px',
                    padding: '8px',
                    fontWeight: '700'
                }}>{'Corporate Solutions S.A.'}</span>
            <span style={textStyle}>{R.strings.copyright}</span>
            <a style={{...textStyle,}}>Privacy Policy</a>
    </MediaQuery>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: R.colours.primaryDarker
}

const columnStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
}

// heading style,
const textStyle = {...R.styles.text,
    color: R.colours.white,
    fontSize: '12px',
    padding: '8px'
}