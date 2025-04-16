import React from 'react';
import {useState} from 'react';

const Navigation = ({setStep}) => {
    //let buttonData = "btn mt-8 !font-serif text-amber-100 rounded-none !bg-transparent hover:!inset-shadow-sm hover:!inset-shadow-amber-100 transition-shadow duration-300";
    let buttonData = "btn mt-2 ml-2 !p-3 !border-none focus:!border-none hover:!border-none !font-serif text-amber-100 !rounded-md !bg-transparent !shadow-[inset_0px_-5px_2px_rgba(0,0,0,0.3)] hover:!shadow-[inset_0px_-3px_2px_rgba(180,170,127,1)] active:!shadow-[inset_0px_-3px_5px_rgba(180,170,127,1)] active:!bg-cyan-950 transition-shadow duration-300";
    return(
        <>
            <header className="fixed top-0 flex shadow-md w-full left-0 z-50 bg-cyan-900">
                <div className="flex items-end justify-between">
                    <p className="font-serif text-amber-100 text-3xl m-4 ml-6">Jase Beaubien</p>
                    <div className="absolute right-8 top-0 flex justify-end items-end">
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