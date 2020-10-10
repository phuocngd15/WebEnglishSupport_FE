import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TestcallApiAzue } from './service/serverApi';
import useAudio from '../../../Comopents/custom/useAudio';

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

const ByStories = ({ isStory }) => {
  return (
    <Player
      url={
        'https://crudapitest.azurewebsites.net/tracks/5f54af4587e40f62f8ede087'
      }
    />
  );
};
ByStories.propTypes = {
  prop: PropTypes
};
export default ByStories;
