import * as React from 'react'
import * as gimi from '../assets/gimi.png'
import * as iaoip from '../assets/iaoip_logo.png'
import * as pmi from '../assets/pmi_logo.png'
import * as ebcl from '../assets/ecbl_logo.png'

/**
 * Main app entrypoint
 */
export default function Training() {
    return (
        <r-grid style={{
            backgroundImage: "linear-gradient(0deg, rgb(255, 255, 255), rgba(96, 196, 176, 0.2)"
        }}
         class="p-16" columns="8">
            <r-cell class="flex flex-col py-16" span="2-5" span-s="2-7">
                <h1>Our Training and Capacity Building Services</h1>
                <p className="pt-6 max-w-4xl">
                    We are a Preferred/Registered Education Provider of both the
                    International Association of Innovation Professionals (IAOIP.org)
                    and of the Project Management Institute (PMI.org). We can
                    prepare you for such certifications as Certified Innovation
                    Professional or Innovation Management (IAOIP), Project
                    Management Professional (PMP), Agile Project Management,
                    Project Cycle Management and Monitoring and Evaluation.
                </p>
            </r-cell>
            <r-cell class="flex flex-wrap justify-center
            items-center md:justify-start mx-16 my-4"
                 span="6-8"
                 span-s="row">
                <div className="flex flex-wrap justify-center">
                    <img className="m-8 object-contain w-64" src={gimi}/>
                    <img className="m-8 object-contain w-64" src={iaoip}/>
                </div>
                <div className="flex flex-wrap justify-center">
                    <img className="m-8 object-contain w-64" src={pmi}/>
                    <img className="m-8 object-contain w-64" src={ebcl}/>
                </div>
            </r-cell>
        </r-grid>
    )
}
