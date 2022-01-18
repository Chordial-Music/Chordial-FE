import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { ChordialProvider } from '../src/components/state/ChordialProvider';
import { SessionProvider } from '../src/components/state/SessionProvider';

render(
  <Router>
    <SessionProvider>
      <ChordialProvider>
        <App />
      </ChordialProvider>
    </SessionProvider>
  </Router>,
  document.getElementById('root')
);
