import { useState } from "react"
import eddyPNG from '../assets/edwin.png'
import resume from '../assets/Edwin_Karimi_Resume.pdf'

const Navbar = () => {
    const [navbar, setNavbar] = useState<Boolean>(false)

    return (
        <div className="fixed w-full z-10 top-0">
            <header className="text-center text-white py-1 bg-green-500 font-semibold">Currently open to opportunities</header>
            <nav className="px-2 sm:px-4 shadow-lg" style={{ backgroundColor: "#1e202b" }}>
                <div className="container flex flex-wrap justify-between items-center mx-auto pb-1">
                    <div className="flex items-center px-3">
                        <img src={eddyPNG} alt="edwin" className="rounded-full w-10 md:w-16 mr-2 pb-4" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-rose-600">EK</span>
                    </div>
                    <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className={`${navbar ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <div className="flex flex-col items-center mt-4 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <a href="#skills" className="block text-lg font-bold py-2 px-4 text-white rounded hover:bg-rose-600">Skills</a>
                            <a href="#projects" className="block border border-transparent text-lg font-bold py-2 px-4 text-white rounded hover:bg-rose-600">Projects</a>
                            <a href="#contact" className="block text-lg font-bold py-2 px-4 text-white rounded hover:bg-rose-600">Contact</a>
                            <a href={resume} download className="block text-lg font-bold py-2 px-4 mt-1 md:mt-0 text-white rounded bg-rose-600 hover:bg-transparent hover:ring-2 hover:ring-rose-600 hover:text-rose-600">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar