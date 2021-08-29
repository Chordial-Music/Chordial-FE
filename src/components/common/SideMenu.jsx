import React from 'react'
import { useSideMenu } from '../state/ChordialProvider';
import styles from './sideMenu.css';
import toggle from './toggle.css';

function SideMenu() {

  const { sideMenu, setSideMenu } = useSideMenu();

  return (
    <div className={sideMenu ? styles.sideMenu : toggle.toggle}>
      <ul>
        <li>Log In</li>
        <li>Sign Up</li>
        <li>Saved Sequences</li>
      </ul>
    </div>
  );
}

export default SideMenu;


