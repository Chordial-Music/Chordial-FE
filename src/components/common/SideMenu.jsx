/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../services/auth';
import styles from './sideMenu.css';
import toggle from './toggle.css';
import { useSession } from '../state/SessionProvider';
import { useChordArray, useMute, useNodes, useSideMenu } from '../state/ChordialProvider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import AlertModal from '../common/AlertModal';

function SideMenu() {
  const history = useHistory();
  const [alert, setAlert] = useState();
  const { mute, setMute } = useMute();
  const { session, setSession } = useSession();
  const { setChordArray } = useChordArray();
  const { setNodes } = useNodes();
  const { sideMenu, setSideMenu } = useSideMenu();
  
  const alertHandler = () => {
    //setAlert to falsey value to dismiss alert
    setAlert(null);
  };

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

  const handleInstructions = () => {
    setAlert({
      title: 'How to use Chordial',
      message: `Selecting a chord will present you with harmonically vetted options.
                You can create a 16 chord sequence.  
                Play them back with the play button, or on your instrument.  
                If you make a mistake, select the reset button.  
                If you'd like to save your creation, login and save.
                Once you're logged in, you can find your saved sequences in the side menu.`,
    });
  };

  return (
    <>
      {alert && (
        <AlertModal
          title={alert.title}
          message={alert.message}
          onConfirm={alertHandler}
        />
      )}
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
        <button onClick={handleInstructions}>Help</button>
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
    </>
  );
}

export default SideMenu;
