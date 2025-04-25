import React from 'react';
import {useState} from 'react';
import {ProjectInfo} from '../data/ProjectInfo.js'
import {Technologies} from '../data/Technologies.js';

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    //TODO add sorting by technologies
    return(
        <div className="w-full">
            <div className="fixed top-12 z-50 w-full">
                <div className="bg-background pt-12 w-full xl:w-1/2">
                </div>
            </div>
            <div className="w-full fixed top-18 xl:top-19 z-100">
                <div className="pr-4 xl:p-0">
                    <input type="text" 
                        placeholder="Search by technologies..." 
                        className="flex justify-start m-2 xl:m-4 w-full xl:w-[calc(50%-1.5rem)] z-100 p-2 xl:p-4 bg-white text-black text-xs xl:text-1xl rounded-lg shadow-md" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            </div>
            <div className="p-2 xl:p-4 pt-0 mt-0 columns-1 sm:columns-1 xl:columns-2 gap-4 font-serif">

                <div className="pb-11 xl:pb-16"></div>

                {ProjectInfo
                .filter((project) =>
                    project.technologies.some((tech) =>
                      tech.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    ||
                    project.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                
                .map((project) => (
                    <div key={project.id} className="break-inside-avoid relative bg-white rounded-lg shadow-md p-2 xl:p-4 mb-4 text-xs xl:text-2xl items-center justify-center">
                        <div className="mb-2 p-2 rounded-md shadow-md bg-secondary flex justify-between">
                            <p className="font-bold text-xs xl:text-2xl">{project.name}</p>
                            <p>{project.type} Project</p>
                        </div>
                        <div className="mb-2 relative">
                            <img alt={project.name} src={`${import.meta.env.BASE_URL}images/${project.image}`} className="rounded-md" />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t rounded-md from-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0">
                                <div className="flex justify-center items-center m-2">
                                    {project.technologies.map((tech) => (
                                        <p className="p-1 m-1 z-20 rounded-md shadow-xs shadow-black/50 bg-red-800 text-white">{tech}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex text-black justify-start items-start">
                            <p>{project.role}</p>
                            <p className="flex justify-start items-start">{project.description}</p>
                            <a href={project.github} target="_blank" className="p-2 bg-blue-500 rounded-md shadow-md !text-white">GIT Page</a>
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    );
}

export default Projects;