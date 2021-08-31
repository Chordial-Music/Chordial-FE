/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import DisplaySequence from '../display/DisplaySequence';
import Login from '../user/Login';
import Signup from '../user/Signup';
import SavedSequences from '../savedSequences/SavedSequences';
import styled from 'styled-components';
import Header from '../common/Header';
import SideMenu from '../common/SideMenu';
import { PrivateRoute } from '../state/SessionProvider';

export default function App() {
  return (
    <>
      <Router>
        <SideMenu />
        <Header />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <AppStyled>
          <PrivateRoute exact path="/saved" component={SavedSequences} />
          <Route exact path="/" component={DisplaySequence} />
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

