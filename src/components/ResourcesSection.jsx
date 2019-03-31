import React from 'react';
import R from 'res/R';
import pdf from '../assets/pdf_icon.svg'
import Title from './Title';
import ImageButton from './ImageButton';
import posed, { PoseGroup } from 'react-pose'
import { useEffect, useState } from 'react'
// import pdfs
import incubatorpdf from '../assets/incubators_science_parks.pdf'
import segmentacionpdf from '../assets/segmentacion_centros_tecnologicos.pdf'
import conceptospdf from "../assets/conceptos_fundamentales_innovacion.pdf";
import mentorshippdf from "../assets/mentorship_manual_turkey.pdf";
import technicalnotepdf from "../assets/tenstep_technical_note.pdf";
import notetechniquepdf from "../assets/note_technique_french.pdf";
import entrepreneuriatpdf from "../assets/entrepreneuriat_valorisation_innovation.pdf";
import competitivenesspdf from "../assets/competitiveness_factors.pdf";
import sustainabilitypdf from "../assets/sustainability_methods.pdf";
import fishingpdf from "../assets/euro_fishing.pdf";
import maputopdf from "../assets/incubators_maputo.pdf";
import devcentrespdf from "../assets/dev_centres_dfc.pdf";
import SideScroller from './SideScroller';
import MediaQuery from 'react-responsive'

/**
 * Displays the body Services section.
 * @function
 */
export default function ResourcesSection() {

    const [visible, setVisible] = useState(true)

        // image container
        const imageStyle = {
            display: 'flex',
            maxWidth: '100px',
            maxHeight: '100px',
            width: '18vw',
            height: '18vw',
            opacity: 0.8
        }


    // return views,
    return (
        <div className="resources" style={rootStyle}>
             <div style={rowContainerStyle}>
             <Title 
                strokeColor={R.colours.white}
                title={'Resources'}
                text={'Read some of our latest reports on technology and entrepreneurship. Download the PDFs here.'}/>
             </div>
             <MediaQuery query="(min-width: 1000px)">
             <SideScroller page1={<div className={'div-1'}>
                    <div style={imageRowStyle} className={'child-1'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Incubators and Science parks in Africa 2018 (English)'} 
                            link={incubatorpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Segmentacion de Centros tecnológicos UNIDO 2018 (Spanish)'} 
                            link={segmentacionpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Conceptos fundamentales y modelos de Innovación empresarial 2018 (Spanish)'} 
                            link={conceptospdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-2'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Mentorship Manual for Young Entrepreneurs Turkey 2017 (English)'} 
                            link={mentorshippdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Technical Note on Governance and Financing of Technology or Industrial Technical Centres UNIDO 2016 (English)'} 
                            link={technicalnotepdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Note Technique sur le Statut Juridique et tutelle de Centres et instituts techniques UNIDO 2016 (French)'} 
                            link={notetechniquepdf}/>
                    </div>
                    </div>}
                page2={<div className={'div-2'}>
                    <div style={imageRowStyle} className={'child-3'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Entrepreneuriat, Valorisation de la Recherche et de l‘Innovation pour les Référents des liaisons Univ-Industrie 2015 (French)'} 
                            link={entrepreneuriatpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Competitiveness Factors - Models and Guidelines for Barbados 2015 (English)'} 
                            link={competitivenesspdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Sustainability Methods for Project appraisal and management 2014 (English)'} 
                            link={sustainabilitypdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-4'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Euro-Parliament Fishing Tourism in the EU Technical Note 2014 (English, in EU parliament web other languages)'} 
                            link={fishingpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Presentation of Pilot Business Incubators in Maputo and Machava in Mozambique 2011 (Portuguese)'} 
                            link={maputopdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Business Development Centres in Development Services and Centres 1999 (English)'} 
                            link={devcentrespdf}/>
                    </div>
                    </div>}/>
             </MediaQuery>
             <MediaQuery query="(max-width: 1000px)">
             <SideScroller page1={<div className={'div-1'}>
                    <div style={imageRowStyle} className={'child-1'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Incubators and Science parks in Africa 2018 (English)'} 
                            link={incubatorpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Segmentacion de Centros tecnológicos UNIDO 2018 (Spanish)'} 
                            link={segmentacionpdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-2'}>
                        <ImageButton src={pdf}
                                imageStyle={imageStyle}
                                text={'Conceptos fundamentales y modelos de Innovación empresarial 2018 (Spanish)'} 
                                link={conceptospdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Mentorship Manual for Young Entrepreneurs Turkey 2017 (English)'} 
                            link={mentorshippdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-2'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Technical Note on Governance and Financing of Technology or Industrial Technical Centres UNIDO 2016 (English)'} 
                            link={technicalnotepdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Note Technique sur le Statut Juridique et tutelle de Centres et instituts techniques UNIDO 2016 (French)'} 
                            link={notetechniquepdf}/>
                    </div>
                    </div>}
                page2={<div className={'div-2'}>
                    <div style={imageRowStyle} className={'child-3'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Entrepreneuriat, Valorisation de la Recherche et de l‘Innovation pour les Référents des liaisons Univ-Industrie 2015 (French)'} 
                            link={entrepreneuriatpdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Competitiveness Factors - Models and Guidelines for Barbados 2015 (English)'} 
                            link={competitivenesspdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-4'}>
                    <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Sustainability Methods for Project appraisal and management 2014 (English)'} 
                            link={sustainabilitypdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Euro-Parliament Fishing Tourism in the EU Technical Note 2014 (English, in EU parliament web other languages)'} 
                            link={fishingpdf}/>
                    </div>
                    <div style={imageRowStyle} className={'child-4'}>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Presentation of Pilot Business Incubators in Maputo and Machava in Mozambique 2011 (Portuguese)'} 
                            link={maputopdf}/>
                        <ImageButton src={pdf}
                            imageStyle={imageStyle}
                            text={'Business Development Centres in Development Services and Centres 1999 (English)'} 
                            link={devcentrespdf}/>
                    </div>
                    </div>}/>
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
        padding: '2vw',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(0deg, ${R.colours.primary}, ${R.colours.primaryDarker})`
    }

    
// row container
const rowContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    flex: 1,
    paddingLeft: '10vw',
    alignSelf: 'flex-start',
    flexDirection: 'row',
}

const imageRowStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
}
