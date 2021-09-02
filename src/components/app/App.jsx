/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplaySequence from '../display/DisplaySequence';
import EditSequence from '../editSequence/EditSequence';
import Header from '../common/Header';
import Login from '../user/Login';
import { PrivateRoute } from '../state/SessionProvider';
import SavedSequences from '../savedSequences/SavedSequences';
import SideMenu from '../common/SideMenu';
import Signup from '../user/Signup';
import About from '../about/About.jsx';
import styled from 'styled-components';
import AlertModal from '../common/AlertModal';

export default function App() {
  return (
    <>
      <Router>
        <SideMenu />
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/saved" component={SavedSequences} />
        <Route exact path="/about" component={About} />
        <Route exact path="/edit" component={EditSequence} />
        <AppStyled>
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


