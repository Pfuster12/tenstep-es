import React from 'react';
import R from 'res/R';
import close from '../assets/close.svg'
/**
 * Displays a dialog with Privacy Policy.
 * @function
 */
export default function PrivacyPolicyDialog(props) {

    const { hidePolicy } = props
    
    // return views,
    return (
    <div style={rootStyle}>
    <div style={
        {
            display: 'flex',
            flex: 1,
            flexDirection: 'column'
        }
    }>
        <img onClick={hidePolicy} style={{cursor: 'pointer', opacity: 0.5, alignSelf: 'flex-end',width: '24px', height: '24px'}} src={close}/>
    <span style={headingStyle}>Privacy Policy</span>
        <span style={textStyle}>Corporate Solutions SA (“CS”, “we”, “us”, or “our”) recognizes the importance of protecting personal information and data. This policy outlines how and why we collect, process, and handle personal information. This policy also informs individuals (“you”, “your”, or “their”) about their rights regarding this data. This policy applies to personal data provided to us, both by individuals themselves or by others. Our policy is to be transparent about why and how we process personal data.  To find out more about our specific processing activities, please go to the relevant sections of this statement.</span>
            <span style={textStyle}>If you would like additional details regarding CS Personal Information and Privacy Policy, to submit a request regarding your personal information, or to submit a complaint please contact mariaa@corpsolutions.net. An email communication to the above address is the quickest way to receive a response from CS. However, you may also submit requests in writing or by phone to the contacts below:</span>
            <span style={textStyle}>Address: Calle Mauricio Legendre 6, 7C, 28046, Madrid, Spain</span>
            <span style={textStyle}>tlf: +34 913158577</span>
            <span style={textStyle}>mobile: +34 609021411</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Collection of Personal Information</span>
            <span style={textStyle}>We will only collect personal information where the data is reasonably necessary for a genuine business-related purpose. This data is typically collected directly from you for the agreed purposes of potentially receiving services from you, receiving services from us, or keeping you informed about CS work.</span>
            <span style={textStyle}>The types of Personal Information we may collect includes:</span>
            <span style={textStyle}>- Name<br/>- Institution<br/>- Email<br/></span>
            <span style={textStyle}>CS relies on the consent of individuals to collect and hold their data. You may opt not to provide consent or not provide certain personal information requested; however, doing so may result in CS not able to provide you with services or contract with you. CS strives to keep the personal data we hold relevant, updated, and correct. If there is a change in your personal data, please inform CS so that we may update your information as relevant.</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Use of Personal Data</span>
            <span style={textStyle}>We use the personal information for the following purposes: <br/>- Providing you services<br/>- Receiving services from you<br/>- Keeping you informed about CS work</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Sharing of Personal Information</span>
            <span style={textStyle}>CS will only share your personal information with others when we are legally permitted to do so. If your personal data is subject to the EU’s GDPR, CS ensures that the transfers will be under an agreement which covers the EU requirements for the transfer of personal data outside the EU, such as the European Commission approved standard contractual clauses. CS does not sell your personal data to any third-parties.</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Retention of Personal Information</span>
            <span style={textStyle}>It is our intent to not keep personal information for longer than reasonably required. The duration depends on the nature of the personal data and the purposes for which it was received.</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Your Rights Regarding Your Personal Data</span>
            <span style={textStyle}>The EU’s GDPR details an individual’s rights regarding their personal data. CS respects and supports these rights and applies them to personal data held generally. These rights include:</span>
            <span style={textStyle}>Right to Access.</span>
            <span style={textStyle}>Right to Data Portability</span>
            <span style={textStyle}>Right to Correction</span>
            <span style={textStyle}>Right to Object to or Restrict Processing</span>
            <span style={textStyle}>Right of Erasure</span>
            <span style={textStyle}>Right to Withdraw Consent</span>
            <span style={textStyle}>To act on any of the above rights, CS may need to request additional information regarding the specifics of the request as well as confirm your identity. We will respond to these requests in accordance with regulatory requirements once we confirm the validity of the request. Requests regarding these rights can be submitted to CS.</span>
            <span style={{...headingStyle, fontSize: '24px'}}>Information Collected by Corporate Solutions’s Website</span>
            <span style={textStyle}>CS collects anonymized data about visitors to our websites. No personally identifiable information is collected or maintained without the user’s consent.</span>


    </div>
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    position: 'fixed',
    //margin: '0 auto',
    top: '10%',
    //left: '50%',
    margin: '60px',
    padding: '24px',
    width: 'auto',
    height: '600px',
    overflowY: 'scroll',
    zIndex: 10000,
    borderRadius: '8px',
    boxShadow: '0px 2px 10px grey',
    backgroundColor: R.colours.white,
    flexDirection: 'column',
}

    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: 'calc(24px + 1vw)',
        maxFontSize: '42px',
        padding: '16px',
        fontWeight: 'bold',
        color: R.colours.primary
    }

   // heading style,
   const textStyle = {...R.styles.text,
    padding: '4px',
    color: '#000'
}