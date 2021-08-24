import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ChordialProvider } from '../src/components/state/ChordialProvider';

render(
  <ChordialProvider>
    <App />
  </ChordialProvider>,
  document.getElementById('root')
);
