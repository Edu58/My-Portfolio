import { ReactNode } from 'react'
import reactSVG from '../assets/react.svg'
import javascriptSVG from '../assets/javascript.svg'
import typescriptSVG from '../assets/typescript.svg'
import angularSVG from '../assets/angular.svg'
import nodejsSVG from '../assets/nodejs.svg'
import pythonSVG from '../assets/python.svg'
import postgresqlSVG from '../assets/postgresql.svg'
import mongodbSVG from '../assets/mongodb.svg'

const Skills = () => {

    interface Skill {
        image: string,
        name: string
    }

    const skills: Skill[] = [
        {
            image: javascriptSVG,
            name: "Javascript"
        },
        {
            image: typescriptSVG,
            name: "Typescript"
        },
        {
            image: reactSVG,
            name: "React.js"
        },
        {
            image: angularSVG,
            name: "Angular"
        },
        {
            image: nodejsSVG,
            name: "Node.js"
        },
        {
            image: pythonSVG,
            name: "Python"
        },
        {
            image: postgresqlSVG,
            name: "PostgreSQL"
        },
        {
            image: mongodbSVG,
            name: "MongoDB"
        }
    ]

    return (
        <div>
            <h3 className='text-center text-rose-600 text-3xl md:text-4xl mt-10 font-semibold mb-5'>Skills</h3>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-y-8 mx-auto' style={{ maxWidth: "65rem" }}>
                {skills.map((skill: Skill) => {
                    return (
                        <div className="shadow-lg shadow-rose-600/50 hover:shadow-rose-600/100 p-2 w-60 mx-auto text-white rounded ease-in-out duration-300">
                            <div className="flex justify-center items-center">
                                <img src={skill.image} alt="javascript" />
                                <p className='ml-2'>{skill.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills