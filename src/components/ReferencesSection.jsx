import React from 'react';
import R from 'res/R';
import ReferenceBox from './ReferenceBox';
import MediaQuery from 'react-responsive'
import startup_rocket from '../assets/startup_rocket.svg'
import microscope from '../assets/microscope.svg'
import food_tech from '../assets/food_tech.svg'
import uni_liaison from '../assets/uni_liason.svg'
import trade from '../assets/trade.svg'
import industrial_robot from '../assets/industrial_robot.svg'
import government from '../assets/government.svg'
import wind_farm from '../assets/wind_farm.svg'
import sme_innovation from '../assets/sme_innovation.svg'
import healthcare from '../assets/healthcare.svg'
import guatemala_innovation from '../assets/guatemala_innovation.svg'
import evaluation from '../assets/evaluation.svg'
import technology_center from '../assets/technology_center.svg'
import consumer_support from '../assets/consumer.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


/**
 * Displays the body Services section.
 * @function
 */
export default function ReferencesSection() {

    const turkey = <ReferenceBox 
        src={startup_rocket}
        title={'Turkey'}
        description={'Support to Young Entrepreneurship in the Ankara region; Business Centres for promoting SMEs and investment in 6 regions at the Chambers of Commerce.'}/>
    const burkina = <ReferenceBox 
                        src={microscope}
                        title={'Burkina Faso'}
                        description={'Pre-feasibility Study of the first Technopolis-Science Park in the Ouagadougou Capital.'}/>
    const cameroon = <ReferenceBox 
                        src={food_tech}
                        title={'Cameroon'}
                        description={'Food technology Centre feasibility analysis.'}/>
    const algeria = <ReferenceBox
                        src={uni_liaison}
                        title={'Algeria'}
                        description={'Support to the universities‐enterprise technical and liaison centres for the Ministry of Education and Research '}/>
    const west_africa = <ReferenceBox
                            src={trade}
                            title={'West Africa'}
                            description={'Formulation of the regional trade program for the EU 10th EDF - Nigeria and Burkina Faso.'}/>
    const mozambique = <ReferenceBox
                            src={industrial_robot}
                            title={'Mozambique'}
                            description={'Evaluation of the Business Climate improvement strategy and SME support program of Ministry of Industry – appraisal of a project to support industrial investments and SMEs'}/>
    const macedonia = <ReferenceBox
                        src={government}
                        title={'FYR Macedonia'}
                        description={'Training in IPA  funds management, PCM and project feasibility to staff of chambers, associations and of 10 government ministries.'}/>
    const romania = <ReferenceBox
                        src={wind_farm}
                        title={'Romania'}
                        description={'Design and support of industrial clusters for Ministry of EU Integration; design and management of six business incubators in regions for the Ministry of Natural Resources.'}/>
    const malta = <ReferenceBox
                    src={sme_innovation} 
                    title={'Malta'}
                    description={'Innovation and SME development programme and training for Malta Enterprise.'}/>
    const jordan = <ReferenceBox
                        src={healthcare}
                        title={'Jordan'}
                        description={'Evaluation of a labour and social security simplification programme for SMEs.'}/>
    const guatemala = <ReferenceBox
                        src={guatemala_innovation}
                        title={'Guatemala and Costa Rica'}
                        description={'Implementation of National Innovation program, and evaluation of Quality/Innovation programmes'}/>
    const paraguay = <ReferenceBox
                        src={evaluation} 
                        title={'Paraguay, Uruguay and Argentina'}
                        description={'Formulation and evaluation of business and innovation programmes; implementation of an SME restructuring programme.'}/>
    const colombia = <ReferenceBox
                        src={technology_center} 
                        title={'Colombia and Peru'}
                        description={'Evaluation and restructuring of the technology centres of both countries (CDTs and CITEs)'}/>
    const mexico = <ReferenceBox
                        src={consumer_support}
                        title={'Mexico'}
                        description={'Evaluation of SME and consumer support programmes within the EU-Mexico partnership programme.'}/>
    const social = <ReferenceBox src={twitter} 
                        title='And more...'
                         description="Follow us in Social Media to learn more."
                         link={'https://twitter.com/juliofuster?lang=en'}/>
    const social2 = <ReferenceBox src={linkedin} 
                        title='LinkedIn'
                        description="Follow us in LinkedIn"
                        link={'https://www.linkedin.com/in/juliofuster'}/>

    // return views,
    return (
        <div className="references" style={rootStyle}>
            <p style={headingStyle}>Corporate Solutions has lead over 100 assignments in emerging countries</p>
            <MediaQuery query="(max-width: 600px)">
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {turkey}
                {burkina}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {cameroon}
                {algeria}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
            {west_africa}
                {mozambique}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
            {macedonia}
                {romania}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {malta}
                 {jordan}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {guatemala}
                {paraguay}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {colombia}
                {mexico}
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1000} minWidth={600}>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {turkey}
                {burkina}
                {cameroon}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {algeria}
                {west_africa}
                {mozambique}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
               {macedonia}
                {romania}
                {malta}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                 {jordan}
                {guatemala}
                {paraguay}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {colombia}
                {mexico}
                {social}
                   
            </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1000px)">
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {turkey}
                {burkina}
                {cameroon}
                {algeria}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {west_africa}
                {mozambique}
                {macedonia}
                {romania}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                {malta}
                {jordan}
                {guatemala}
                {paraguay}
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                    {colombia}
                    {mexico}
                    {social}
                    {social2}
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
        alignItems: 'center',
        flexDirection: 'column',
        padding: '32px'
    }
    
    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: '40px',
        padding: '2vw',
        fontWeight: '700',
        color: R.colours.primary,
        textAlign: 'center'
    }
    
    // heading style,
    const textStyle = {...R.styles.text,
        maxWidth: '400px',
        fontSize: '1rem',
        padding: '1rem'
    }