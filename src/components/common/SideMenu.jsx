/* eslint-disable max-len */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../services/auth';
import styles from './sideMenu.css';
import toggle from './toggle.css';
import { useSession } from '../state/SessionProvider';
import { useChordArray, useNodes, useSideMenu } from '../state/ChordialProvider';

function SideMenu() {
  const history = useHistory();
  const { setChordArray } = useChordArray();
  const { setNodes } = useNodes();
  const { session, setSession } = useSession();
  const { sideMenu } = useSideMenu();

  const handleHome = () => {
    history.push('/');
    window.location.reload();
  };

  const handleClick = () => {
    logout()
      .then(() => {
        setSession(null);
        setChordArray(['C']);
        setNodes('C');
        history.push('/');
        window.location.reload();
      });
  };

  return (
    <div className={sideMenu ? styles.sideMenu : toggle.toggle}>
      <button onClick={handleHome}>Home</button>
      {session ? <></> : <Link to={'/login'}>Log In</Link>}
      {session ? <></> : <Link to={'/signup'}>Sign Up</Link>}
      {session ? <Link to={'/saved'}>Saved Sequences</Link> : <></>}
      <Link to={'/about'}>About</Link>
      {session ? <button onClick={handleClick}>Logout</button> : <></>}
    </div>
  );
}

export default SideMenu;
