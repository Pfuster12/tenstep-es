import * as React from 'react'
import * as gimi from '../assets/gimi.png'
import * as dfc from '../assets/dfc_logo.png'
import * as dai from '../assets/dai_logo.png'
import * as ikei from '../assets/ikei_logo.png'
import * as europeaid from '../assets/europe_aid_logo.png'
import * as ecorys from '../assets/ecorys_logo.png'
import * as cowi from '../assets/cowi_logo.png'

export default function Partners() {
    return (
        <r-grid id="partners"
        class="p-24" columns="8">
            <r-cell class="flex justify-center" span="row">
                <h1 className="text-center w-4xl">
                We work together with multiple international organisations
                </h1>
            </r-cell>
            <r-cell class="flex justify-center mt-16 flex-wrap" span="row">
                <span className="text-center text-2xl text-gray-700 leading-loose max-w-6xl">
                We are a Registered Education Provider of both the International
                 Association of Innovation Professionals and of the Project Management Institute.
                 We also frequently team up with other consulting firms to form consortia
                 for international assignments.
                 </span>
            </r-cell>
            <r-cell class="flex mt-16 justify-center flex-wrap" span="row">
                <img className="m-8 h-24" src={gimi}/>
                <img className="m-8 h-20" src={dfc}/>
                <img className="m-8 h-20" src={dai}/>
                <img className="m-8 h-24" src={ikei}/>
                <img className="m-8 h-24" src={ecorys}/>
                <img className="m-8 h-16" src={cowi}/>
            </r-cell>
        </r-grid>
    )
}
