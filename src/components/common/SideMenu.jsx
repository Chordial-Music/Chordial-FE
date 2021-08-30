import React from 'react';
import { Link } from 'react-router-dom';
import { useSideMenu } from '../state/ChordialProvider';
import styles from './sideMenu.css';
import toggle from './toggle.css';
import { useSession } from '../state/SessionProvider';
import { retrieveSequence } from '../../utils/hooks';

function SideMenu() {
  const session = useSession();
  const { sideMenu, setSideMenu } = useSideMenu();

  const handleClick = async () => {
    const sequence = await retrieveSequence(session.username);
    console.log(sequence);
    //history.push
  };

  return (
    <div className={sideMenu ? styles.sideMenu : toggle.toggle}>

      <Link to={'/login'}>Log In</Link>
      <Link to={'/signup'}>Sign Up</Link>
      {session ? <Link to={'/saved'}>Saved Sequences</Link> : <></>}

      {/* <Link to={'/saved'}>Saved Sequences</Link> */}
    </div>
  );
}

export default SideMenu;


