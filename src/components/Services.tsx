import * as React from 'react'
import * as rocket from '../assets/rocket_service.svg'
import * as sme from '../assets/sme_service.svg'
import * as regional from '../assets/regional_service.svg'
import * as improve from '../assets/improve_service.svg'
import ServiceItem from './ServiceItem'

export default function Services() {
    return (
        <r-grid id="services" class="p-16" columns="8">
            <r-cell span="row">
                <h1 className="text-center mx-4">
                Our consulting services focus on
                innovation and economic development
                </h1>
            </r-cell>
            <r-cell class="mt-16" span="2-7" span-l="3-6" span-s="1-8">
                <ServiceItem image={rocket}
                    title="Innovation for Development"
                    description="We consult in the development of industrial and
                    science technology parks, incubation and technology centres."/>
            </r-cell>
            <r-cell class="mt-16 flex justify-end" span-l="3-6" span="1-8">
                <ServiceItem image={sme}
                    title="Small and Medium Enterprise (SMEs)"
                    description="We work with and support Small and Medium
                    Enterprise and consult on entrepreneurship policies and support programs"/>
            </r-cell>
            <r-cell class="mt-16" span="2-7" span-l="3-6" span-s="1-8">
                <ServiceItem image={regional}
                    title="Regional and Smart Strategies"
                    description="Our work with the EU Regional framework delivers
                    Regional Innovation Strategies (RIS) and Smart Specialization Strategies (S3)."/>
            </r-cell>
            <r-cell class="mt-16 flex justify-end" span-l="3-6" span="2-7" span-s="1-8">
                <ServiceItem image={improve}
                    title="Improving Business Environment"
                    description="Competitiveness, simplification and improvement
                    of a country or region’s business environment is our goal"/>
            </r-cell>
        </r-grid>
    )
}
