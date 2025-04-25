import React from 'react';
import {useState} from 'react';

const Navigation = ({setStep}) => {
    //let buttonData = "btn mt-8 !font-serif text-amber-100 rounded-none !bg-transparent hover:!inset-shadow-sm hover:!inset-shadow-amber-100 transition-shadow duration-300";
    let buttonData = "btn !text-xs md:!text-2xl !w-1/2 m-1 !p-2 md:!p-4 !border-none focus:!border-none hover:!border-none !font-serif !rounded-md !bg-transparent !shadow-[inset_0px_-5px_2px_rgba(0,0,0,0.3)] hover:!shadow-[inset_0px_-3px_2px_rgba(180,170,127,1)] active:!shadow-[inset_0px_-3px_5px_rgba(180,170,127,1)] active:!bg-black/15 transition-shadow duration-300";
    return(
        <>
            <header className="z-200 fixed top-0 left-0 shadow-md w-full bg-primary justify-center items-center">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="w-full flex md:w-1/2 font-serif text-sm md:text-4xl mt-2 mb-0 md:m-4 md:ml-8 justify-center md:justify-start">Jase Beaubien</p>
                    <div className="flex m-1 mt-0 flex md:justify-end md:items-end justify-center items-center">
                        <button onClick={() => setStep("about")} className={buttonData}>About</button>
                        <button onClick={() => setStep("projects")} className={buttonData}>Projects</button>
                        <button onClick={() => setStep("experience")} className={buttonData}>Experience</button>
                        <button onClick={() => setStep("contact")} className={buttonData}>Contact</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navigation;

/*<header className="z-200 fixed top-0 shadow-md w-full left-0 z-50 bg-primary justify-center items-center">
                <div className="flex flex-col md:flex-row w-full items-center justify-between">
                    <p className="w-full md:w-1/2 font-serif text-sm md:text-4xl m-2 md:m-4 md:ml-8 justify-center md:justify-start">Jase Beaubien</p>
                    <div className="flex m-1 flex md:justify-end md:items-end justify-center items-center">
                        <button onClick={() => setStep("about")} className={buttonData}>About</button>
                        <button onClick={() => setStep("projects")} className={buttonData}>Projects</button>
                        <button onClick={() => setStep("experience")} className={buttonData}>Experience</button>
                        <button onClick={() => setStep("contact")} className={buttonData}>Contact</button>
                    </div>
                </div>
            </header>*/