import React, { useEffect, useState, useRef } from 'react'

const makeaudio = (url) => {
    const sound = new Audio(url)
    if (!sound.attributes.src.isConnected)
        return sound.attributes.src.isConnected;
    return sound
}

const useAudio = url => {
    const [audio] = useState(makeaudio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (audio)
            playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        if (audio)
            audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};
export default useAudio;
