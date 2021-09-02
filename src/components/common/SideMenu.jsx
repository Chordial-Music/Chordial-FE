/* eslint-disable max-len */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../services/auth';
import styles from './sideMenu.css';
import toggle from './toggle.css';
import { useSession } from '../state/SessionProvider';
import { useChordArray, useMute, useNodes, useSideMenu } from '../state/ChordialProvider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

function SideMenu() {
  const history = useHistory();
  const { setChordArray } = useChordArray();
  const { setNodes } = useNodes();
  const { session, setSession } = useSession();
  const { sideMenu, setSideMenu } = useSideMenu();
  const { mute, setMute } = useMute();

  const handleCheck = () => {
    setMute(prev => !prev);
  };

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

      {!mute ?
        <div
          onClick={handleCheck}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          Sound: <VolumeUpIcon
            style={{ paddingLeft: '10px', fontSize: '2rem' }} />
        </div>
        : <div
          onClick={handleCheck}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          Sound: <VolumeOffIcon style={{ paddingLeft: '10px', fontSize: '2rem' }} />
        </div>}
    </div>
  );
}

export default SideMenu;
