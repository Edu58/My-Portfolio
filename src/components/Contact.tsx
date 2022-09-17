import twitterSVG from '../assets/twitter.svg'
import linkedinSVG from '../assets/linkedin.svg'
import githubSVG from '../assets/github.svg'

const Contact = () => {
    return (
        <div className="container text-center px-2 mt-20 mx-auto text-white">
            <h2 className="text-3xl md:text-4xl mb-5 font-semibold text-rose-600" id='contact'>Contact</h2>

            <p className='text-sm pb-4 text-blue-500'>Have a question or want to work together?</p>

            <p className='w-80 mx-auto'>
                Email me at <a href="mailto:edumuriithi58@gmail.com" className="text-rose-600 font-bold hover:text-blue-900">edumuriithi58@gmail.com</a> for quick responses or reach out at any of my socials.
            </p>

            <div className="socials flex mt-10">
                <div className='grid grid-cols-3 gap-10 mx-auto'>
                    <a href="https://www.linkedin.com/in/edwin-karimi/" target="_blank" className='hover:bg-neutral-500 p-2 rounded'>
                        <img src={linkedinSVG} alt="linkedin" />
                    </a>
                    <a href="https://twitter.com/GISDevEd" target="_blank" className='hover:bg-neutral-500 p-2 rounded'>
                        <img src={twitterSVG} alt="twitter" />
                    </a>
                    <a href="http://github.com/Edu58" target="_blank" className='hover:bg-neutral-500 p-2 rounded'>
                        <img src={githubSVG} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact