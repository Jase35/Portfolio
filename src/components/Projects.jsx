import React from 'react';
import {useState} from 'react';
import {ProjectInfo} from '../data/ProjectInfo.js'
import {Technologies} from '../data/Technologies.js';

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    //TODO add sorting by technologies
    return(
        <>
            <input type="text" 
                placeholder="Search by technologies..." 
                className="m-6 p-4 bg-white rounded-md shadow-md" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="p-6 pt-0 columns-1 sm:columns-1 lg:columns-2 gap-6 font-serif">
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
                    <div key={project.id} className="break-inside-avoid relative bg-white rounded-lg shadow-md p-6 mb-6 text-2xl items-center justify-center">
                        <div className="relative text-white">
                            <div className="absolute top-3 left-3 flex justify-start items-start">
                                <p className="font-bold text-2xl w-full rounded-md shadow-md bg-white/50">{project.name}</p>
                                <p>{project.type} Project</p>
                                <p className="">Role: {project.role}</p>
                                <p>Purpose: {project.purpose}</p>
                            </div>
                            <img alt={project.name} src={"/images/" + project.image} className="rounded-md mt-2" />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t rounded-md from-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0">
                                <div className="flex justify-center items-center m-2">
                                    {project.technologies.map((tech) => (
                                        <p className="p-1 m-1 z-20 rounded-md shadow-xs shadow-black/50 bg-red-800 text-white">{tech}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" className="p-2 bg-blue-500 rounded-md shadow-md !text-white">GIT Page</a>
                    </div>  
                ))}
            </div>
        </>
    );
}

export default Projects;