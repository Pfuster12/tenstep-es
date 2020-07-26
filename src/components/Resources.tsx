import * as React from 'react'
import ResourceItem from './ResourceItem'
import * as incubators from '../assets/incubators_science_parks.pdf'
import * as gimi_brochure from '../assets/gimi_brochure.pdf'
import * as gimi_six_feet_apart from '../assets/gimi_six_feet_apart.pdf'
import * as conceptos_fundamentales_innovacion from '../assets/conceptos_fundamentales_innovacion.pdf'
import * as mentorship_manual_turkey from '../assets/mentorship_manual_turkey.pdf'

export default function Resources() {
    return (
        <r-grid id="resources" style={{
            backgroundImage: "linear-gradient(0deg, rgb(40, 62, 78), rgb(3, 43, 58))"
        }}
        class="px-16 py-24" columns="8">
            <r-cell>
                <h1 className="text-white ml-24">Resources</h1>
            </r-cell>
            <r-cell class="flex justify-center mt-16 flex-wrap" span="row">
                <ResourceItem href={gimi_six_feet_apart}
                    highlight
                    title="GIMI Government - Beyond Six Feet Apart"/>
                <ResourceItem href={gimi_brochure}
                    title="GIMI Brochure 2020"/>
                <ResourceItem href={incubators}
                    title="Incubators and Science parks in Africa 2018 (English)"/>
                <ResourceItem href={conceptos_fundamentales_innovacion}
                    title="Conceptos fundamentales y modelos de Innovación empresarial 2018 (Spanish)"/>
                <ResourceItem href={mentorship_manual_turkey}
                    title="Mentorship Manual for Young Entrepreneurs Turkey 2017 (English)"/>
            </r-cell>
        </r-grid>
    )
}
