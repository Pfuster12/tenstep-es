import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles.css'
import './utils/raster.grid.css'
import * as logo from './assets/cslogo.png'
import Welcome from './components/Welcome'
import About from './components/About'
import Services from './components/Services'
import Training from './components/Training'
import Assignments from './components/Assignments'
import Resources from './components/Resources'
import Partners from './components/Partners'
import Contact from './components/Contact'

/**
 * Main app entrypoint
 */
export default function App() {

    function scrollToElement(el: string) {
        var elmnt = document.getElementById(el)
        elmnt.scrollIntoView()
    }

    return (
        <>
            <header>
                <r-grid class="shadow w-full fixed bg-white" columns="8">
                    <r-cell class="flex justify-center md:justify-start p-4"
                        span="1-2" span-s="row">
                        <a className="flex items-center" href="./">
                            <img className="mx-16 w-40 cursor-pointer"
                                src={logo}/>
                        </a>
                    </r-cell>
                    <r-cell class="hidden md:flex items-center justify-end"
                        span="3-8">
                        <a className="text-xl px-8"
                        onClick={() => scrollToElement("services")}>Services</a>
                        <a className="text-xl px-8"
                        onClick={() => scrollToElement("references")}>References</a>
                        <a className="text-xl px-8"
                        onClick={() => scrollToElement("resources")}>Resources</a>
                        <a className="text-xl px-8"
                        onClick={() => scrollToElement("partners")}>Partners</a>
                        <a className="text-xl px-8"
                        onClick={() => scrollToElement("contact")}>Contact</a>
                    </r-cell>
                </r-grid>
            </header>
            <main className="flex flex-col flex-grow">
                <Welcome/>
                <About/>
                <Services/>
                <Training/>
                <Assignments/>
                <Resources/>
                <Partners/>
                <Contact/>
            </main>
            <footer style={{backgroundColor: 'rgb(3, 43, 58)'}}>
                <r-grid columns="8">
                    <r-cell class="flex flex-column justify-center p-8"
                        span="row">
                        <span className="text-gray-400 px-2">Copyright © 2000-2020 - Corporate Solutions S.A.</span>
                        <span className="text-gray-400 px-2">Calle Mauricio Legendre 6, 7C, 28046, Madrid, Spain</span>
                    </r-cell>
                    <r-cell class="flex flex-column justify-center p-4"
                        span="row">
                        <a href="https://www.linkedin.com/in/juliofuster/"
                        className="text-gray-500 px-2">Follow us in LinkedIn</a>
                        <a href="https://twitter.com/juliofuster"
                        className="text-gray-500 px-2">Twitter</a>
                    </r-cell>
                    <r-cell class="flex flex-column justify-center p-4"
                        span="row">
                        <a className="text-gray-400" href="./privacy.html">Privacy Policy</a>
                    </r-cell>
                </r-grid>
            </footer>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
