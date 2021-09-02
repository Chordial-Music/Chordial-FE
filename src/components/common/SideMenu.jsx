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
  const { sideMenu, setSideMenu } = useSideMenu();

  const showSideMenu = () => {
    setSideMenu(!sideMenu);
  };

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
    <div 
      className={sideMenu ? styles.sideMenu : toggle.toggle}
      // onClick={showSideMenu}
    >
      {session ? <span>Hello, {session.username} 🙂</span> : <>Hello, Guest!</>}
      <button onClick={handleHome}>Home</button>
      {session ? <></> : <Link 
        to={'/login'}
        onClick={showSideMenu}>Log In</Link>}
      {session ? <></> : <Link 
        to={'/signup'}
        onClick={showSideMenu}  
      >Sign Up</Link>}
      {session ? <Link 
        to={'/saved'}
        onClick={showSideMenu}
      >Saved Sequences</Link> : <></>}
      <Link to={'/about'}
        onClick={showSideMenu}
      >About</Link>
      {session ? <button onClick={handleClick}>Logout</button> : <></>}
    </div>
  );
}

export default SideMenu;
