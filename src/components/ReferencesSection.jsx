import React from 'react';
import R from 'res/R';
import ReferenceBox from './ReferenceBox';
import MediaQuery from 'react-responsive'

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
                    title={'Turkey'}
                    description={'Support to Young Entrepreneurship in the Ankara region; Business Centres for promoting SMEs and investment in 6 regions at the Chambers of Commerce.'}/>
                <ReferenceBox 
                    title={'Burkina Faso'}
                    description={'Pre-feasibility Study of the first Technopole-Science Park in the Ouagadougou Capital.'}/>
                <ReferenceBox 
                    title={'Cameroon'}
                    description={' Foodtechnology Centre feasibility analysis.'}/>
            </div>
            <div style={
                {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }
            }>
                <ReferenceBox 
                    title={'Algeria'}
                    description={'Support to the universities‐enterprise technical and liaison centres for the Ministry of Education and Research '}/>
                <ReferenceBox 
                    title={'West Africa'}
                    description={'Formulation of the regional trade program for the EU 10th EDF - Nigeria and Burkina Faso.'}/>
                <ReferenceBox 
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
                    title={'FYR Macedonia'}
                    description={'Training in IPA  funds management, PCM and project feasibility to staff of chambers, associations and of 10 government ministries.'}/>
                <ReferenceBox 
                    title={'Romania'}
                    description={'Design and support of and Education) industrial clusters for Ministry of EU Integration; design and managemetn of six business incubators in regions  for Ministry of Natural Resources.'}/>
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
                    title={'more...'}
                    description={"Read more references of our assignments."}
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
                    title={'Turkey'}
                    description={'Support to Young Entrepreneurship in the Ankara region; Business Centres for promoting SMEs and investment in 6 regions at the Chambers of Commerce.'}/>
                <ReferenceBox 
                    title={'Burkina Faso'}
                    description={'Pre-feasibility Study of the first Technopole-Science Park in the Ouagadougou Capital.'}/>
                <ReferenceBox 
                    title={'Cameroon'}
                    description={' Foodtechnology Centre feasibility analysis.'}/>
                <ReferenceBox 
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
                    title={'West Africa'}
                    description={'Formulation of the regional trade program for the EU 10th EDF - Nigeria and Burkina Faso.'}/>
                <ReferenceBox 
                    title={'Mozambique'}
                    description={'Evaluation of the Business Climate improvement strategy and SME support program of Ministry of Industry – appraisal of a project to support industrial investments and SMEs'}/>
                <ReferenceBox 
                    title={'FYR Macedonia'}
                    description={'Training in IPA  funds management, PCM and project feasibility to staff of chambers, associations and of 10 government ministries.'}/>
                <ReferenceBox 
                    title={'Romania'}
                    description={'Design and support of and Education) industrial clusters for Ministry of EU Integration; design and managemetn of six business incubators in regions  for Ministry of Natural Resources.'}/>
                
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
                    title={'more...'}
                    description={"Read more references of our assignments."}
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
        textAlign: 'center'
    }
    
    // heading style,
    const textStyle = {...R.styles.text,
        maxWidth: '400px',
        fontSize: '1rem',
        padding: '1rem'
    }