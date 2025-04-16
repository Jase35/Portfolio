import React from 'react';
import {useState} from 'react';

const MusicPanel = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio("/music/song1.wav"));

    const toggleMusic = () => {
        if(isPlaying){
            audio.pause();
            setIsPlaying(false);
        }else{
            audio.play();
            setIsPlaying(true);
        }
    };

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audio.volume = newVolume;
    }

    return(
        <>
            <div className="flex p-4 rounded-lg shadow-md bg-cyan-900 font-serif text-white">
                <button onClick={toggleMusic}>Play</button>
                <div className="">
                    <input type="range" onChange={e => changeVolume(e)} className=""></input>
                    <p className="text-xs">Original &copy; Jase Beaubien</p>
                </div>
            </div>
        </>
    );
}

export default MusicPanel;