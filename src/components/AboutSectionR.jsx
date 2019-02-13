import React from 'react';
import R from 'res/R';
import julioPic from '../assets/julio_profile.png'
import mochalPic from '../assets/tom_mochal.jpg'
import kumarPic from '../assets/himanshu_kumar.jpg'
import braggPic from '../assets/chris_bragg.png'
import dickinsonPic from '../assets/dickinson.jpg'
import hectorPic from '../assets/hector_perez.jpg'
import josePic from '../assets/jfulle.jpg'
import mohamedPic from '../assets/mohamed_ghodbane.jpg'
import worldbank_logo from '../assets/world_bank.png'
import idb_logo from '../assets/idb_logo.png'
import european_comission from "../assets/european_comission.svg";
import ProfileImage from './ProfileImage';
import Title from './Title';
import ImageButton from './ImageButton'
import MediaQuery from 'react-responsive'

/**
 * Displays the About Section.
 * @function
 */
export default function AboutSectionR() {

    // About Text,
    const aboutText = "Corporate Solutions specializes in consulting and advisory services to win and manage projects, funded generally by international institutions which foster economic development. It is a TenStep group practice is made up of several global offices led by Spain —which coordinates the practice— plus TenStep offices in Tunisia, Poland, Guatemala, Ecuador."
    const aboutText2 = "Combined with the expertise of Consortium members of other European consulting firms we bid and implement international assignments in emerging countries. Since 1999 we have garnered substantial experience in business innovation —especially the feasibility and support of innovation and entrepreneurship structures, such as science and technology parks and areas, incubation centres and hubs."

    return (
        <div style={
            {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                margin: 'calc(16px + 2vw)',
                //maxWidth: '1200px',
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
                <Title title={"About Us"}
                        text={aboutText}
                        text2={aboutText2}/>
                <div style={
                    {
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        marginLeft: '8vw'
                    }
                }>
                    <MediaQuery query="(min-width: 1000px)">
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
                <MediaQuery query="(max-width: 1000px)">
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
            <MediaQuery query="(min-width: 1000px)">
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
                    <ProfileImage src={dickinsonPic} text={"Dickinson Agyapong"} location={'Ghana, West Africa'}/>
                    <ProfileImage src={hectorPic} text={"Hector Perez"} location={'Guatemala, Central America'}/>
                    <ProfileImage src={josePic} text={"Jose Gonzalez Fulle"} location={'Chile, South America'}/>
                    <ProfileImage src={mohamedPic} text={"Mohamed Ghodbane"} location={'Tunisia, North Africa'}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 1000px)">
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
                    <ProfileImage src={dickinsonPic} text={"Dickinson Agyapong"} location={'Ghana, West Africa'}/>
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