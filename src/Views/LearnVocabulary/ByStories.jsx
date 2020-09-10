import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { TestcallApiAzue } from './service/callApi';


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};

const ByStories = ({ isStory }) => {
    return (
        <Player url={'https://crudapitest.azurewebsites.net/tracks/5f54af4587e40f62f8ede087'} />
    );
}
ByStories.propTypes = {
    prop: PropTypes
}
export default ByStories