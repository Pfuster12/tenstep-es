import * as React from 'react'
import * as slope from '../assets/sloping_up.svg'

export default function Welcome() {
    return (
        <r-grid  style={{
            background: 'url(' + slope + ')' + ' 0px 200px / cover no-repeat'
        }} class="mt-24" columns="8">
        <r-cell class="flex flex-col mt-40 justify-center items-center" span="row" span-s="row">
        <div className="flex flex-col lg:flex-row items-center mx-24 justify-center">
            <iframe className="hidden md:block" width="600"
                height="355"
                src="https://www.youtube.com/embed/eCkmcoDcZ44?controls=0"
                frameBorder="0"
                style={{minWidth: '400px'}}
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
                <iframe className="md:hidden" width="420"
                    height="355"
                    src="https://www.youtube.com/embed/eCkmcoDcZ44?controls=0"
                    frameBorder="0"
                    style={{minWidth: '400px'}}
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <h1 className="text-center lg:text-left md:ml-24 mt-16 lg:mt-0 leading-relaxed max-w-5xl">
                    Corporate Solutions International Specialises
                    in Innovation Policy in Emerging Markets
                </h1>
        </div>
        </r-cell>
        <r-cell class="flex mb-24 mt-16 justify-center" span="row">
            <a href="https://www.giminstitute.org/index.php/six-feet-apart/"
            target="_blank">
            <img className="mt-16 cursor-pointer"
                src="https://www.giminstitute.org/wp-content/uploads/2020/04/six-feet-apart-1024x220-400x85.png"/>
            </a>
        </r-cell>
        </r-grid>
    )
}
