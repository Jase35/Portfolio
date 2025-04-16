import React from 'react';
import {useState} from 'react';
import {Info} from '../data/Info.js'

const Contact = () => {
    return(
        <>
            <div className="rounded-md shadow-md bg-white m-6">
                <p>Mobile: {Info.phone}</p>
                <p>Email: {Info.email}</p>
            </div>
        </>
    );
}

export default Contact;