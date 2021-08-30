import React from 'react';
import { Link } from 'react-router-dom';
import { useSideMenu } from '../state/ChordialProvider';
import styles from './sideMenu.css';
import toggle from './toggle.css';

function SideMenu() {

  const { sideMenu, setSideMenu } = useSideMenu();

  return (
    <div className={sideMenu ? styles.sideMenu : toggle.toggle}>
     
        <Link to={'/login'}>Log In</Link>
        <Link to={'/signup'}>Sign Up</Link>
        <Link to={'#'}>Saved Sequences</Link>

    </div>
  );
}

export default SideMenu;


