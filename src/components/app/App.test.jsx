import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { ChordialProvider } from '../state/ChordialProvider';
import { SessionProvider } from '../state/SessionProvider';

describe('App component', () => {
  it('displays a node', async () => {
    render(
      <MemoryRouter>
        <SessionProvider>
          <ChordialProvider>
            <App/>
          </ChordialProvider>
        </SessionProvider>
      </MemoryRouter>
    );

    const cButton = screen.getByTestId('cButton');
    expect(cButton).not.toBeDisabled();

    

    userEvent.click(cButton);
    expect(cButton).toHaveStyle({ display: 'none' });

    const chordContainer = screen.getByTestId('chordContainer');
    expect(chordContainer).toHaveTextContent('C');

    const nodeButton = screen.getByTestId('nodeButton');
    expect(nodeButton).not.toBeDisabled();

  });

});
