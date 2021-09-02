/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSideMenu, useMute } from '../state/ChordialProvider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

function Header() {
  const { sideMenu, setSideMenu } = useSideMenu();
  const { mute, setMute } = useMute();

  const showSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const handleCheck = () => {
    setMute(prev => !prev);
  };

  return (
    <HeaderStyled>
      
      <h1
        style={{
          color: 'white', fontSize: '70px', padding: '1rem', fontFamily: 'Pacifico',
          textShadow: '3px 3px 5px black'
        }}
      >
          Chordial</h1>
      {/* {!mute ? 
        <div
          onClick={handleCheck}
          className="audio-btn-container"
        >
          Sound: <VolumeUpIcon className="audio-btn" />
        </div> 
        : <div 
          onClick={handleCheck}
          className="audio-btn-container"
        >
          Sound: <VolumeOffIcon className="audio-btn" /> 
        </div>} */}

      <div className="menu" onClick={showSideMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>

    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    padding: 10px 50px;
    cursor: pointer;
    z-index: 1000;
    .menu-bar {
    width: 50px;
    background-color: #000000ce;
    height: 7px;
    margin: 7px;
    border-radius: 10px;
    }
  }

  
`;
