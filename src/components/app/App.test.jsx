import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { ChordialProvider } from '../state/ChordialProvider';
import { SessionProvider } from '../state/SessionProvider';

function renderChordial() {
  // const user = {
  //   id: '22',
  //   username: 'Horace',
  //   passwordHash: ''
  // };

  return render(
    <MemoryRouter>
      <SessionProvider>
        <ChordialProvider>
          <App/>
        </ChordialProvider>
      </SessionProvider>
    </MemoryRouter>
  );
}

describe('App component', () => {
  it('displays a node', async () => {
    renderChordial();

    const heading = screen.getByRole('heading', { name: /chordial/i });
    expect(heading).toBeInTheDocument();

    const cButton = screen.getByTestId('cButton');
    expect(cButton).not.toBeDisabled();

    userEvent.click(cButton);
    expect(cButton).toHaveStyle({ display: 'none' });

    const chordContainer = screen.getByTestId('chordContainer');
    expect(chordContainer).toHaveTextContent('C');

    const nodeButton = screen.getByTestId('nodeButton');
    expect(nodeButton).not.toBeDisabled();
  });

  it('Opens the side menu and clicks on about', async () => {
    renderChordial();
    const sideMenu = screen.getByRole('menu');
    userEvent.click(sideMenu);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
    userEvent.click(about);
    const heading = await screen.findByRole('heading', { name: /The Ballad/i });
    expect(heading).toBeInTheDocument();
  });

  it('Opens the side menu and clicks on Login', () => {
    renderChordial();
    const sideMenu = screen.getByRole('menu');
    userEvent.click(sideMenu);
    const login = screen.getByRole('link', { name: /log in/i });
    expect(login).toBeInTheDocument();
    userEvent.click(login);
    const username = screen.getByRole('button', { name: /login/i });
    expect(username).toBeInTheDocument(); 
  });
});
