import React from 'react';
import R from 'res/R';
import julioPic from '../assets/julio_profile.png'
import mochalPic from '../assets/tom_mochal.jpg'
import kumarPic from '../assets/himanshu_kumar.jpg'
import braggPic from '../assets/chris_bragg.png'
import hectorPic from '../assets/hector_perez.jpg'
import josePic from '../assets/jfulle.jpg'
import mohamedPic from '../assets/mohamed_ghodbane.jpg'
import worldbank_logo from '../assets/world_bank.png'
import idb_logo from '../assets/idb_logo.png'
import european_comission from "../assets/european_comission.svg";
import ProfileImage from './ProfileImage';
import Title from './Title';
import slope from '../assets/sloping_up.svg'
import ImageButton from './ImageButton'
import MediaQuery from 'react-responsive'
import AboutTitle from './AboutTitle';

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSectionR() {
    return (
        <div className="about" style={
            {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                padding: 'calc(16px + 2vw)',
                //maxWidth: '1200px',
                background: `url(${slope}) -200px no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: '0px 200px',
                alignItems: 'center'
            }
        }>
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row'
                }
            }>
                <AboutTitle/>
                <div style={
                    {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        marginLeft: '8vw'
                    }
                }>
                    <MediaQuery query="(min-width: 1100px)">
                        <ImageButton src={worldbank_logo} 
                            imageStyle={{width: '360px'}}
                            text={'World Bank'}
                            link={'https://www.worldbank.org/'}
                            noText={true}/>
                        <ImageButton src={idb_logo} 
                            imageStyle={{width: '240px'}}
                            text={'Inter-American Development Bank'}
                            link={'https://www.iadb.org/en'}
                            noText={true}/>
                        <ImageButton src={european_comission} 
                            imageStyle={{width: '210px'}}
                            text={'European Comission'}
                            link={'https://ec.europa.eu/commission/index_en'}
                            noText={true}/>
                    </MediaQuery>
                </div>
            </div>
            <div style={
                {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row'
                }
            }>
                <MediaQuery query="(max-width: 1100px)">
                    <ImageButton src={worldbank_logo} 
                        imageStyle={imageStyle}
                        text={'World Bank'}
                        link={'https://www.worldbank.org/'}
                        noText={true}/>
                    <ImageButton src={idb_logo} 
                        imageStyle={imageStyle}
                        text={'Inter-American Development Bank'}
                        link={'https://www.iadb.org/en'}
                        noText={true}/>
                    <ImageButton src={european_comission} 
                        imageStyle={imageStyle}
                        text={'European Comission'}
                        link={'https://ec.europa.eu/commission/index_en'}
                        noText={true}/>
                </MediaQuery>
                </div>
                <span style={
                                {...R.styles.text, 
                                paddingLeft: '16px', 
                                paddingTop: '46px', 
                                fontSize: '22px', 
                                fontWeight: 'bold'
                                }
                            }>
                                Tenstep Partners
                </span>
            <MediaQuery query="(min-width: 1100px)">
                <div style={
                    {
                        display: 'flex',
                        flex: '0 0 auto',
                        flexDirection: 'row',
                        marginTop: '32px'
                    }
                }>
                    <ProfileImage src={julioPic} text={"Julio Fuster"} location={'Madrid, Europe'}/>
                    <ProfileImage src={mochalPic} text={"Tom Mochal"} location={'Atlanta, USA'}/>
                    <ProfileImage src={kumarPic} text={"Himanshu Kumar"} location={'New York, USA'}/>
                    <ProfileImage src={braggPic} text={"Chris Bragg"} location={'Bahrain, Middle East'}/>
                    <ProfileImage src={hectorPic} text={"Hector Perez"} location={'Guatemala, Central America'}/>
                    <ProfileImage src={josePic} text={"Jose Gonzalez Fulle"} location={'Chile, South America'}/>
                    <ProfileImage src={mohamedPic} text={"Mohamed Ghodbane"} location={'Tunisia, North Africa'}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 1100px)">
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    alignItems: 'center'
                }
            }>
                <div style={
                    {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: '32px'
                    }
                }>
                    <ProfileImage src={julioPic} text={"Julio Fuster"} location={'Madrid, Europe'}/>
                    <ProfileImage src={mochalPic} text={"Tom Mochal"} location={'Atlanta, USA'}/>
                    <ProfileImage src={kumarPic} text={"Himanshu Kumar"} location={'New York, USA'}/>
                </div>
                <div style={
                    {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: '32px'
                    }
                }>
                    <ProfileImage src={braggPic} text={"Chris Bragg"} location={'Bahrain, Middle East'}/>
                    <ProfileImage src={josePic} text={"Jose Gonzalez Fulle"} location={'Chile, South America'}/>
                    <ProfileImage src={hectorPic} text={"Hector Perez"} location={'Guatemala, Central America'}/>
                </div>
                <div style={
                    {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: '32px'
                    }
                }>
                    <ProfileImage src={josePic} text={"Jose Gonzalez Fulle"} location={'Chile, South America'}/>
                    <ProfileImage src={mohamedPic} text={"Mohamed Ghodbane"} location={'Tunisia, North Africa'}/>
                </div>
            </div>
            </MediaQuery>
        </div>
    )
}

const imageStyle = {
    width: '20vw'
}