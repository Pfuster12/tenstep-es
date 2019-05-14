import React from 'react';
import R from 'res/R';
/**
* Displays a title with a small description below it.
* @function
 */
export default function AboutTitle(props) {
    // get the text
    const { title, text, text2, strokeColor } = props

      // About Text,
      const aboutText = "Corporate Solutions specializes in consulting and advisory services to win and manage projects, funded generally by international institutions which foster economic development. It is a Global Partner of the TENSTEP PROJECT MANAGEMENT GROUP and the leader of the Innovation Management practice, made up of several global offices led by Spain, which coordinates the group's practice, plus TenStep offices in Tunisia, Poland, Guatemala, Ecuador."
      const aboutText2 = "Combined with the expertise of Consortium members of other European consulting firms we bid and implement international assignments in emerging countries. Since 1999 we have garnered substantial experience in business innovation —especially the feasibility and support of innovation and entrepreneurship structures, such as science and technology parks and areas, incubation centres and hubs."
  

    // heading style,
    const headingStyle = {...R.styles.heading,
        fontSize: 'calc(32px + 1vw)',
        maxFontSize: '42px',
        maxWidth: '480px',
        padding: '16px',
        fontWeight: 'bold',
        color:  strokeColor !== undefined ? strokeColor : R.colours.primary
    }

    // heading style,
    const textStyle = {...R.styles.text,
        padding: '1rem',
        maxWidth: '480px',
        color: strokeColor !== undefined ? strokeColor : '#000'
    }

    // return views,
    return (
    <div style={rootStyle}>
        <span style={headingStyle}>About Us</span>
        <svg style={lineStyle} width={100} height={9}>
            <line x1={0} y1={0} x2={200} y2={0} 
                style={
                    { 
                        stroke: strokeColor !== undefined ? strokeColor : R.colours.primary,
                        strokeWidth: '9px'
                    }
                }>
            </line>
        </svg>
        <span style={textStyle}><span style={{fontWeight: 'bold'}}>Corporate Solutions S.A.</span>, the member of <a href="https://tenstep.com/">Tenstep Consulting Group</a>, based in Spain, specializes in consulting and advisory services to win and manage projects, funded generally by international institutions which foster economic development. It is a Global Partner of the Tenstep group and the leader of the Innovation Management practice, made up of several offices led by Spain, which coordinates the group's practice, plus TenStep offices in Tunisia, Poland, Guatemala, Ecuador.</span>
        {text2 !== undefined ? <span style={textStyle}>Combined with the expertise of Consortium members of other European consulting firms we bid and implement international assignments in emerging countries. Since 1999 we have garnered substantial experience in business innovation —especially the feasibility and support of innovation and entrepreneurship structures, such as science and technology parks and areas, incubation centres and hubs.</span> : <React.Fragment/>}
    </div>
    )
}
//
// Styles for the component.
//
const rootStyle = {
    display: 'flex',
    width: 'auto',
    flexDirection: 'column',
}

const lineStyle = {
    marginLeft: '1rem'
}