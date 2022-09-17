import junia from '../assets/junia.png'
import showcase from '../assets/showcase.png'
import proximity from '../assets/proximity.png'
import ghsearch from '../assets/ghsearch.png'
import pitchrank from '../assets/pitchrank.png'
import portfolio from '../assets/portfolio.png'

const Projects = () => {

    interface Project {
        name: string,
        image: string,
        description: string,
        link: string
    }

    const projects: Project[] = [
        {
            name: 'Junia',
            image: junia,
            description: 'Junia is an eccomerce website. It runs on a NOde.JS and Express backend and a React.js frontend. Customers can view products, see detailed information and pricing, add to cart, add shipping info, choose payment method, place an order and then pay. Other features include roles(admin & customer), JWT authentication and state management using the Reacts Context API.',
            link: 'https://github.com/Edu58/Junia-Eccomerce'
        },
        {
            name: 'EK',
            image: portfolio,
            description: "My portfolio which i assume you're reading this description from, is built with Vite and React Typescript with a touch of the wonderful Tailwind CSS. I decided to go with the dark mode as it's easier to the eyes. It showcases just a tiny bit of my coding super powers which i continue to improve daily. Hopefully by the time you're reading this i'm a senior developer at a huge tech-driven company sipping coffee while reviewing some code 😄🚀.",
            link: '/'
        },
        {
            name: 'Showcase',
            image: showcase,
            description: 'Show-Case is a website similar to Awaards. It is built with Django 4, Django-Bootstrap5, PostgreSQL, Cloudinary and hosted on Heroku. It is a platform where users can post their projects and other users can vote on them based on the usability, content and design of the project. Users can also add their info to their profile for other users to see incase they would like to reach out.',
            link: 'https://workshowcase.herokuapp.com/'
        },
        {
            name: 'Proximity',
            image: proximity,
            description: 'Proximity ia a neighborhood watch web app built with Django 4, Cloudinary, PostgreSQL and deployed on Heroku. With proximity, a user can create an acount, login, and see what other users have posted on the platform. Posts are categorised into 3, Events, Announcements and Alerts. They are also color coded to allow easier spotting. A user can also create their own post, add their neighbourhood or even a business.They can also search for a specifi business or neighbourhood which will also show the extra info such as the total occupants, location and emergency contacts eg. police, hospital, fire department.',
            link: 'https://proximitysync.herokuapp.com/'
        },
        {
            name: 'GitSearch',
            image: ghsearch,
            description: 'This is a simple tool that makes searching Github much easier. It is purely frontend and is built with Angular 13, Material Angular, Bootstrap 5 and the Github API. You can search for a github user using their username or s repository using the repo. For more details on the users, profile or the repos details, the website redirects you to GitHub.',
            link: 'https://edu58.github.io/Angular-Github-Search/'
        },
        {
            name: 'PitchRank',
            image: pitchrank,
            description: "This is a pitches website that allows users to submit their pitches and other users can like, dislike and comment on them. It more like reddit but for pitches. First the user has to sign up and login with valid credentials.If a user want's to submit their pitch they can do so by adding a new pitch in the Add page. The pitch is then added to the pitch list with the most recent pitch being added at the top. Other users, can then like or dislike the pitch.They can also add a comment to the pitch.In the comment page, the commenter also gets to see other comments belonging to that pitch.",
            link: 'https://pitchrank.herokuapp.com/'
        }
    ]

    return (
        <div className='container px-2 flex flex-col justify-center items-center mx-auto'>
            <h3 className="text-3xl md:text-4xl text-rose-600 text-center font-semibold mt-20" id='projects'>Projects</h3>



            <div className="projects">
                {
                    projects.map((project: Project) => {
                        return (
                            <div className="md:flex my-20" style={{ maxWidth: "60rem" }}>

                                <img src={project.image} alt={project.name} className='rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full' />

                                <div className="summary ml-8 text-white">
                                    <p className="text-4xl mb-3">{project.name}</p>
                                    <p>
                                        {project.description}
                                    </p>

                                    <p className='text-rose-500 text-lg mt-4'>
                                        <a href={project.link} target="_blank" className='border-l-2 border-rose-600 px-3 hover:text-white hover:border-white'>view project</a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <p className="md:text-xl text-center text-rose-600">
                You can view more of my projects on my <a href="http://github.com/Edu58" target="_blank" className='underline text-blue-500'>GitHub</a>
            </p>

        </div>
    )
}

export default Projects