import * as React from 'react'
import * as world_bank from '../assets/world_bank.png'
import * as sdgs from '../assets/sdgs.png'
import * as idb from '../assets/idb_logo.png'
import * as euc from '../assets/european_comission.svg'
import * as undp from '../assets/undp-logo-30.svg'
import * as julio from '../assets/julio.jpg'
import * as ronald from '../assets/ronald_profile.jpg'
import * as hitendra from '../assets/hitendra_profile.jpg'
import * as rafael from '../assets/rafael_profile.png'
import * as fernando from '../assets/fernando_profile.jpg'
import * as benjamin from '../assets/benjamin_profile.jpg'
import * as massimo from '../assets/massimo_profile.jpg'
import * as slope from '../assets/sloping_up.svg'
import PartnerItem from './PartnerItem'

/**
 * Main app entrypoint
 */
export default function About() {
    return (
        <r-grid style={{
            backgroundColor: '#F5F8FB'
        }} columns="8">
        <r-cell class="flex flex-col pt-8" span="2-5" span-s="2-7">
            <h1>About</h1>
            <p className="pt-6 max-w-4xl">
                Corporate Solutions S.A, based in Spain, specializes in consulting and advisory services to win and
                manage projects, funded generally by international institutions
                which foster innovation policy for development. It is a Global Partner of the
                <a class="text-primary" href="https://www.giminstitute.org/"> Global Innovation Management Institute (GIMI) </a>
                and global Advisor
                for International Institutions and its impact on the Sustainable Development Goals.
            </p>
            <img  style={{
                width: '280px'
            }}
            className="self-center" src={sdgs}/>
        </r-cell>
        <r-cell class="flex flex-wrap justify-center md:justify-start mx-16 my-4"
             span="6-8"
             span-s="row">
            <div className="flex flex-wrap items-center justify-center">
                <img className="m-8 object-contain w-24" src={undp}/>
                <img className="m-8 object-contain w-64" src={world_bank}/>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <img className="m-8 object-contain w-56" src={idb}/>
                <img className="m-8 object-contain w-56" src={euc}/>
            </div>
        </r-cell>
        <r-cell class="flex justify-center items-center" span="row">
            <h3 className="text-gray-700">GIMI Partners</h3>
        </r-cell>
        <r-cell class="flex justify-center my-16 items-center flex-wrap"
            span="row">
            <PartnerItem image={julio}
                name={"Julio Fuster"}
                location={"Madrid, Europe"}/>
            <PartnerItem image={ronald}
                name={"Ronald Jonash"}
                location={"Boston, USA"}/>
            <PartnerItem image={hitendra}
                name={"Hitendra Patel"}
                location={"Boston, USA"}/>
            <PartnerItem image={rafael}
                name={"Rafael Lemaitre"}
                location={"UAE, Middle East"}/>
            <PartnerItem image={benjamin}
                name={"Benjamin Sywulka"}
                location={"Guatemala, Central America"}/>
            <PartnerItem image={fernando}
                name={"Fernando Onosake"}
                location={"Brazil, South America"}/>
            <PartnerItem image={massimo}
                name={"Massimo Andriolo"}
                location={"Italy, Europe"}/>
        </r-cell>
        </r-grid>
    )
}
