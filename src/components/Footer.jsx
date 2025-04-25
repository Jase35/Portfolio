import React from 'react';
import {useState} from 'react';

const Footer = () => {
    return(
        <>
            <footer className="bottom-0 shadow-md m-0 p-0 w-full left-0 z-50 bg-secondary p-4 xl:p-6 text-xs xl:text-md">
                <div className="flex justify-between pb-2 xl:pb-4">
                    <p className="flex justify-start">&copy; 2025 Jase Beaubien</p>
                    <p className="flex justify-end">jaseb@iastate.edu</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex justify-start">Via Vite + React and Tailwind CSS.</p>
                    <p className="flex justify-end">(641) - 640 - 5244</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;