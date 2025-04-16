import React from 'react';
import {useState} from 'react';

const Footer = () => {
    return(
        <>
            <footer className="bottom-0 shadow-md m-0 p-0 w-full left-0 z-50 bg-orange-950 p-6">
                <p className="flex justify-center font-serif text-amber-100 pb-4">&copy; 2025 Jase Beaubien</p>
                <p className="flex justify-center font-serif text-amber-100">Made with Vite + React and Tailwind CSS.</p>
            </footer>
        </>
    );
}

export default Footer;