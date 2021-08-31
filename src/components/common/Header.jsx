/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSideMenu } from '../state/ChordialProvider';

function Header() {
  const { sideMenu, setSideMenu } = useSideMenu();

  const showSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <HeaderStyled>
      <Link to={'/'}>
        <h1
          style={{
            color: 'white', fontSize: '70px', padding: '1rem', fontFamily: 'Pacifico',
            textShadow: '3px 3px 5px black'
          }}
        >
          Chordial</h1></Link>

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
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
    .menu-bar {
    width: 50px;
    background-color: black;
    height: 10px;
    margin: 7px;
    border-radius: 10px;
    }
  }
`;
