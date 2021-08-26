/* eslint-disable max-len */
import React from 'react';
import DisplaySequence from '../display/DisplaySequence';
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <h1
        style={{ color: 'white', fontSize: '70px', padding: '1rem', fontFamily: 'Pacifico',
          textShadow: '3px 3px 5px black'
        }}
      >
        Chordial</h1>
      <AppStyled>
        <DisplaySequence />
      </AppStyled>
    </>
  ) ;
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
}

`;

