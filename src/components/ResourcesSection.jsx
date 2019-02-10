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

/**
 * Displays the body Services section.
 * @function
 */
export default function ResourcesSection() {

    const [visible, setVisible] = useState(false)

        // image container
        const imageStyle = {
            display: 'flex',
            width: '100px',
            height: '100px',
            opacity: 0.8
        }

    const ImageRow = posed.div({
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    })

    useEffect(() => {
        setVisible(true)
    },
    [])


    // return views,
    return (
        <div style={rootStyle}>
             <div style={rowContainerStyle}>
             <Title title={"Resources Section"}
                strokeColor={R.colours.white}
                title={'Resources'}
                text={'Read some of our latest work on technology and entrepreneurship. Download the PDFs here.'}/>
                <div style={{width: '600px', height: '10x'}}></div>
             </div>
            <ImageRow className={'images'}
                pose={visible ? 'visible' : 'hidden'}>
            <div style={imageRowStyle}>
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
            <div style={imageRowStyle}>
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
            <div style={imageRowStyle}>
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
            </ImageRow>
        </div>
        )
    }
    //
    // Styles for the component.
    //
    const rootStyle = {
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'column',
        padding: '2rem',
        alignItems: 'center',
        backgroundImage: `linear-gradient(0deg, ${R.colours.primary}, ${R.colours.primaryDarker})`
    }

    
// row container
const rowContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    flex: '1',
    alignItems: 'center',
    flexDirection: 'row',
}

    const imageRowStyle = {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
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
        width: '400px',
        fontSize: '1rem',
        padding: '1rem',
        color: R.colours.white,
        textAlign: 'justify'
    }