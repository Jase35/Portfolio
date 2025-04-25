import React from 'react';
import {useState} from 'react';
import {ExperienceInfo} from '../data/ExperienceInfo.js'

const Experience = () => {
    return(
        <>
            <p className="text-black text-lg xl:text-3xl font-bold mt-4">Occupational Experience</p>

            <div className="p-2 xl:p-4 pt-0 mt-0 columns-1 sm:columns-1 xl:columns-2 gap-4 font-serif">
                {ExperienceInfo.occupational.map((info) => (
                    <div className="p-4 rounded-md shadow-md bg-secondary justify-between">
                        <p>{info.role}</p>
                        <p>{info.company}</p>
                        <p>{info.location}</p>
                        <p>{info.startDate} - {info.endDate}</p>
                    </div>
                ))}
            </div>

            <p className="">Extracurricular Experience</p>
            <div className="p-2 xl:p-4 pt-0 mt-0 columns-1 sm:columns-1 xl:columns-3 gap-4 font-serif">
                {ExperienceInfo.extracurricular.map((info) => (
                    <div className="p-4 rounded-md shadow-md bg-secondary flex justify-between">
                        <p>a</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experience;