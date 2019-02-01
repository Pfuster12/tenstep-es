import React from 'react';
import R from 'res/R'
import Button from './Button';
import HeaderLinks from './HeaderLinks';
import logo from '../assets/logo.svg'
import posed, { PoseGroup } from 'react-pose'

/**
 * The Header of the website.
 * @function
 */
export default function StickyHeader(props) {
    // get the sticky prop
    const { sticky } = props

    // create a posed div,
    const Container = posed.div({
        enter: { 
            y: '0px', 
            opacity: 1, 
            transition: {
                duration: 500
            }
        },
        exit: { 
            y: '-200px', 
            opacity: 0, 
            transition: { 
                duration: 500 
            } 
        }
      })

    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        height: '80px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        zIndex: 2,
        backgroundColor: R.colours.darkGrey
    }

    // return views,
    return (
        <PoseGroup>
            {sticky && <Container key={"anim-header"} style={rootStyle}>
                            <Button image={logo}
                                titleStyle={imageStyle}/>
                            <Button title={R.strings.corpsolutions}
                                titleStyle={headingStyle}
                                hover={false}/>
                            <HeaderLinks/>
            </Container>}
        </PoseGroup>
    )
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    fontWeight: 'bold',
    paddingLeft: '1rem',
    marginRight: '1rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: R.colours.white
}

// image style,
const imageStyle = {...R.styles.heading,
    width: '46px',
    height: '50px',
    cursor: 'pointer'
}