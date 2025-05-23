import React from 'react';
import {useState} from 'react';

const About = () => {
    return(
        <>
            <div className="flex items-stretch flex-col xl:flex-row justify-between items-center gap-2 m-2 xl:gap-4 xl:m-4">
                <img className="inset-shadow-lg inset-shadow-black w-full xl:w-2/5 rounded-md" alt="profile" src={`${import.meta.env.BASE_URL}images/profile.png`} />
                <div className="bg-white w-full mt-0 mb-0 xl:w-3/5 p-4 rounded-lg bg-secondary inset-shadow-7xl inset-shadow-black">
                    <h1>Summary</h1>
                    <p className="flex justify-start">
                        abc
                    </p>
                </div>
            </div>
            <div className="w-full p-4 pt-0 flex justify-between">
                <div className="bg-white w-3/5 mr-4 p-4 rounded-lg bg-secondary inset-shadow-7xl inset-shadow-black">
                    <h1>Work Model</h1>
                    <p className="flex justify-start">
                        abc
                        Many of my peers have expressed my ability to work fast and with superior quality, as I do not believe 
                        that one must sacrifice quality for speed, nor vice versa. Both can be accomplished simutaneously with a 
                        sufficient diligence. 
                        Using every tool available within the frame of proper ethics.
                    </p>
                </div>
                <img className="inset-shadow-lg inset-shadow-black w-2/5 rounded-md" alt="profile" src="/images/friley-frights.png" />
            </div>
            <div className="w-full p-4 pt-0 flex justify-between">
                <img className="inset-shadow-lg mr-4 inset-shadow-black w-2/5 rounded-md" alt="profile" src="/images/friley-frights.png" />
                <div className="bg-white w-3/5 p-4 rounded-lg bg-secondary inset-shadow-7xl inset-shadow-black">
                    <h1>Q & A</h1>
                    <div className="grid p-0 pt-4 mt-0 columns-1 sm:columns-1 xl:columns-2 gap-4 font-serif">
                        <div className="bg-white rounded-md shadow-md p-4">
                            <p className="flex justify-start">
                                "Would you be willing to relocate?"
                            </p>
                        </div>
                        <div className="bg-white rounded-md shadow-md p-4">
                            <p className="flex justify-start">
                                "Would you be willing to relocate?"
                            </p>
                        </div>
                        <div className="bg-white rounded-md shadow-md p-4">
                            <p className="flex justify-start">
                                "Would you be willing to relocate?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;