import * as React from 'react'
import * as map from '../assets/worldm.png'

export default function Welcome() {
    return (
        <r-grid  style={{
            background: 'url(' + map + ')',
            objectContain: 'cover',
            backgroundRepeat: 'no-repeat'
        }} class="mt-24" columns="8">
        <r-cell class="flex flex-col mt-24 justify-center items-center" span="row" span-s="row">
        <div className="flex flex-col lg:flex-row items-center mx-16 justify-center">
            <iframe className="hidden md:block" width="600"
                height="355"
                src="https://www.youtube.com/embed/eCkmcoDcZ44?controls=0"
                frameBorder="0"
                style={{minWidth: '360px'}}
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <iframe className="md:hidden" width="300"
                height="265"
                src="https://www.youtube.com/embed/eCkmcoDcZ44?controls=0"
                frameBorder="0"
                style={{minWidth: '300px'}}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <h2
             className="text-center mx-12 text-3xl md:text-welcome lg:text-left md:ml-24 mt-16 lg:mt-0 leading-relaxed max-w-5xl">
                Corporate Solutions International is the member of the Global Innovation Management 
                Institute (GIMI) focused on Innovation Policy in Emerging Markets
            </h2>
        </div>
        </r-cell>
        <r-cell class="flex flex-col items-center text-center mb-24 mt-16 mx-16 justify-center" span="row">
            <h3 className="mt-16">Global COVID-19 Think Tank on how to work</h3>
            <a href="https://www.giminstitute.org/index.php/six-feet-apart/"
            target="_blank">
            <img className="mt-16 cursor-pointer"
                src="https://www.giminstitute.org/wp-content/uploads/2020/04/six-feet-apart-1024x220-400x85.png"/>
            </a>
        </r-cell>
        </r-grid>
    )
}
