/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import DisplaySequence from '../display/DisplaySequence';
import Login from '../login/Login';
import SavedSequences from '../savedSequences/SavedSequences';
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <Router>
        <h1
          style={{
            color: 'white', fontSize: '70px', padding: '1rem', fontFamily: 'Pacifico',
            textShadow: '3px 3px 5px black'
          }}
        >
          Chordial</h1>
        <Route exact path='/login' component={Login} />
        <AppStyled>
          <Route exact path='/saved' component={SavedSequences} />
          <Route exact path='/' component={DisplaySequence} />
        </AppStyled>
      </Router>
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}`;

