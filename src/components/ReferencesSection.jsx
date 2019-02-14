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


/**
 * Displays the body Services section.
 * @function
 */
export default function ReferencesSection() {
    // return views,
    return (
        <div style={rootStyle}>
            <p style={headingStyle}>Corporate Solutions has lead over 100 assignments in emerging countries</p>
            <MediaQuery query="(max-width: 1000px)">
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox 
                    src={startup_rocket}
                    title={'Turkey'}
                    description={'Support to Young Entrepreneurship in the Ankara region; Business Centres for promoting SMEs and investment in 6 regions at the Chambers of Commerce.'}/>
                <ReferenceBox 
                    src={microscope}
                    title={'Burkina Faso'}
                    description={'Pre-feasibility Study of the first Technopolis-Science Park in the Ouagadougou Capital.'}/>
                <ReferenceBox 
                    src={food_tech}
                    title={'Cameroon'}
                    description={'Food technology Centre feasibility analysis.'}/>
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox
                    src={uni_liaison}
                    title={'Algeria'}
                    description={'Support to the universities‐enterprise technical and liaison centres for the Ministry of Education and Research '}/>
                <ReferenceBox
                    src={trade}
                    title={'West Africa'}
                    description={'Formulation of the regional trade program for the EU 10th EDF - Nigeria and Burkina Faso.'}/>
                <ReferenceBox
                    src={industrial_robot}
                    title={'Mozambique'}
                    description={'Evaluation of the Business Climate improvement strategy and SME support program of Ministry of Industry – appraisal of a project to support industrial investments and SMEs'}/>
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox
                    src={government}
                    title={'FYR Macedonia'}
                    description={'Training in IPA  funds management, PCM and project feasibility to staff of chambers, associations and of 10 government ministries.'}/>
                <ReferenceBox
                    src={wind_farm}
                    title={'Romania'}
                    description={'Design and support of industrial clusters for Ministry of EU Integration; design and management of six business incubators in regions for the Ministry of Natural Resources.'}/>
                <ReferenceBox 
                    title={'Malta'}
                    description={'Innovation and SME development programme and training for Malta Enterprise.'}/>
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox 
                    title={'Jordan'}
                    description={'Evaluation of a labour and social security simplification programme for SMEs.'}/>
                <ReferenceBox 
                    title={'Guatemala and Costa Rica'}
                    description={'Implementation of National Innovation program, and evaluation of Quality/Innovation programmes'}/>
                <ReferenceBox 
                    title={'Paraguay, Uruguay and Argentina'}
                    description={'Formulation and evaluation of business and innovation programmes; implementation of an SME restructuring programme.'}/>
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox 
                    title={'Colombia and Peru'}
                    description={'Evaluation and restructuring of the technology centres of both countries (CDTs and CITEs)'}/>
                <ReferenceBox 
                    title={'Mexico'}
                    description={'Evaluation of SME and consumer support programmes within the EU-Mexico partnership programme.'}/>
                <ReferenceBox 
                    title={'and more...'}
                    description={"Follow us in Social Media to learn more."}
                   />
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
                <ReferenceBox
                    src={startup_rocket}
                    title={'Turkey'}
                    description={'Support to Young Entrepreneurship in the Ankara region; Business Centres for promoting SMEs and investment in 6 regions at the Chambers of Commerce.'}/>
                <ReferenceBox
                    src={microscope}
                    title={'Burkina Faso'}
                    description={'Pre-feasibility Study of the first Technopolis-Science Park in the Ouagadougou Capital.'}/>
                <ReferenceBox
                    src={food_tech}
                    title={'Cameroon'}
                    description={'Food technology Centre feasibility analysis.'}/>
                <ReferenceBox
                    src={uni_liaison}
                    title={'Algeria'}
                    description={'Support to the universities‐enterprise technical and liaison centres for the Ministry of Education and Research '}/>
                
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox
                    src={trade}
                    title={'West Africa'}
                    description={'Formulation of the regional trade program for the EU 10th EDF - Nigeria and Burkina Faso.'}/>
                <ReferenceBox
                    src={industrial_robot}
                    title={'Mozambique'}
                    description={'Evaluation of the Business Climate improvement strategy and SME support program of Ministry of Industry – appraisal of a project to support industrial investments and SMEs'}/>
                <ReferenceBox
                    src={government}
                    title={'FYR Macedonia'}
                    description={'Training in IPA  funds management, PCM and project feasibility to staff of chambers, associations and of 10 government ministries.'}/>
                <ReferenceBox
                    src={wind_farm}
                    title={'Romania'}
                    description={'Design and support of industrial clusters for Ministry of EU Integration; design and management of six business incubators in regions for the Ministry of Natural Resources.'}/>
                
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
            <ReferenceBox 
                    title={'Malta'}
                    description={'Innovation and SME development programme and training for Malta Enterprise.'}/>
            <ReferenceBox 
                    title={'Jordan'}
                    description={'Evaluation of a labour and social security simplification programme for SMEs.'}/>
                <ReferenceBox 
                    title={'Guatemala and Costa Rica'}
                    description={'Implementation of National Innovation program, and evaluation of Quality/Innovation programmes'}/>
                <ReferenceBox 
                    title={'Paraguay, Uruguay and Argentina'}
                    description={'Formulation and evaluation of business and innovation programmes; implementation of an SME restructuring programme.'}/>
            
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
            <ReferenceBox 
                    title={'Colombia and Peru'}
                    description={'Evaluation and restructuring of the technology centres of both countries (CDTs and CITEs)'}/>
                <ReferenceBox 
                    title={'Mexico'}
                    description={'Evaluation of SME and consumer support programmes within the EU-Mexico partnership programme.'}/>
                <ReferenceBox 
                    title={'and more...'}
                    description={"Follow us in Social Media to learn more."}
                   />
                <ReferenceBox 
                    title={'         '}
                    description={"                       "}
                   />
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