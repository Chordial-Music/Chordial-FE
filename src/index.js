import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { ChordialProvider } from '../src/components/state/ChordialProvider';

render(
  <Router>
    <ChordialProvider>
      <App />
    </ChordialProvider>
  </Router>,
  document.getElementById('root')
);
