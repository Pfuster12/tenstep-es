import React, { useState } from 'react';
import R from 'res/R';
import Title from './Title';
import satellite from '../assets/satellite_lined.svg'
import galaxy from '../assets/galaxy.svg'
import globe from '../assets/globe.svg'
import planet from '../assets/planet.svg'
import MediaQuery from "react-responsive";
import Button from './Button';
import BigButton from './BigButton';
import Reaptcha from 'reaptcha'

/**
 * Displays the About Section.
 * @function
 */
export default function ContactSection() {

    /**
     * Captcha verified state.
     */
    const [verified, setVerified] = useState(false)
    const [enabled, setEnabled] = useState(false)


    // input states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [institution, setInstitution] = useState("")
    const [message, setMessage] = useState("")

    /**
     * Callback sets state to verified.
     */
    function onVerify() {
        setVerified(true)
    }

    /**
     * Submits form if captcha is verified.
     */
    function submitForm() {
        if (enabled && verified) {
            var template_params = {
                "name": name,
                "email": email,
                "institution": institution,
                "message": message
             }
             
             var service_id = "default_service";
             var template_id = "website_email";
             emailjs.send(service_id, template_id, template_params)
             .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
             }, (error) => {
                console.log('FAILED...', error);
             });
        }
    }

    function nameOnChange(event) {
        setName(event.currentTarget.value)
        setEnabled(event.currentTarget.value.length > 0 && email.length > 0)
    }

    
    function emailOnChange(event) {
        setEmail(event.currentTarget.value)
        setEnabled(name.length > 0 && event.currentTarget.value.length > 0)
    }

    
    function institutionOnChange(event) {
        setInstitution(event.currentTarget.value)
    }

    
    function messageOnChange(event) {
        setMessage(event.currentTarget.value)
    }

    // return views,
    return (
    <div className="contact" style={rootStyle}>
            <div style={
                    {
                        display: 'flex', 
                        flexDirection: 'column',
                        flex: 1,
                        paddingLeft: '6vw'
                    }
                }>
     <Title strokeColor={R.colours.white}
                title={'Interested?'}
                text={"Contact us for more information and questions."}/>
        
                <span style={textStyle}>{R.strings.contact_name_title}</span>
                <input onChange={nameOnChange} size="5" style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_email_title}</span>
                <input onChange={emailOnChange} size="5" type="email" style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_instituion_title}</span>
                <input onChange={institutionOnChange} size="5"  style={inputStyle}/>
                <span style={textStyle}>{R.strings.contact_comments_title}</span>
                <textarea onChange={messageOnChange} style={textAreaStyle}
                placeholder={"Write any comments you would like to add to your request..."}/>
                   <div style={{width: '10px', height: '16px'}}/>
                   
                <Reaptcha sitekey={'6LdtJJsUAAAAAJ8ezKs2LBcQcSrzaAgX6vdzoALS'}
                    onVerify={onVerify}/>
                {<BigButton 
                    onClick={submitForm}
                    text={"SUBMIT"}
                    enabled={enabled && verified}
                    color={R.colours.tenstepRedLighter}
                    highlightColor={R.colours.tenstepRedLighterer}
                    width={'180px'}
                    height={'60px'}
                    margin={'24px'}/> }
            </div>
            <MediaQuery query="(min-width: 800px)">
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    paddingTop: '42px'
                }
            }>
            <img style={
                {
                    maxWidth: '150px',
                    height: 'auto',
                    opacity: 0.4
                }
            } src={galaxy}></img>
            <div style={
                {
    
                    flexDirection: 'column',
                    marginTop: '150px',
                    marginLeft: '200px',
                }
            }>
            <img style={
                {
                    maxWidth: '200px',
                    height: 'auto',
                    opacity: 0.4
                }
            } src={satellite}></img>
            </div>
            </div>
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
    padding: '32px',
    flexDirection: 'row',
    backgroundImage: `linear-gradient(-2deg, ${R.colours.primaryDarker}, #26184f)`
}
//#333377

const inputStyle = {
    minWidth: '200px',
    maxWidth: '280px',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    textColor: R.colours.darkGrey
}

const textAreaStyle = {
    maxWidth: '280px',
    height: '250px',
    overflow: 'vertical',
    borderRadius: '4px',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    fontFamily: R.fonts.text,
    resize: 'none'
}

// heading style,
const headingStyle = {...R.styles.heading,
    fontSize: '2rem',
    padding: '1rem',
    fontWeight: 'bold',
    color: R.colours.white
}

// heading style,
const textStyle = {...R.styles.text,
    maxWidth: '400px',
    fontSize: '16px',
    padding: '16px',
    opacity: 1,
    fontWeight: 'bold',
    color: R.colours.white,
}