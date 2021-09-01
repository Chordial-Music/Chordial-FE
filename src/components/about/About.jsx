/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';

function About() {
  return (
    <div className={styles.About}>
      <h1>The Ballad of Chordial</h1>
      <p>After downing a caraffe of coffee, inspiration struck!  
        ~What if there was an app that helped write chord changes for songs?~  
        And from that intial proclamation, our intrepid team of developers brainstormed 
        and coded tirelessly to create: Chordial.  
        No longer would tired musicians have to think up another set of chord changes.  
        Chordial provides users a bevy of harmonic chord destinations relating to their previous choices.  
        This ensures that every sequence created will in the end sound harmonically pleasing, regardless of a users knowledge of chordal music theory.
      </p>
      
      <h2>The Developers</h2>
      <div>
        <div>
          <img src={'/casey.jpg'}/>
          <p>Casey is a full stack software engineer and music wizard. Follow him on https://twitter.com/casey_cameron and https://github.com/CaseyCameron</p>
          <div>
            {/* <img src={'/github.png'}/>
            <img src={'/linkedin.png'}/> */}
          </div>
        </div>
        <div>
          <img src={'/kalan.jpg'}/>
          <p>Kalan Prudhomme description</p>
          <div>
            {/* <img src={'/github.png'}/>
            <img src={'/linkedin.png'}/> */}
          </div>
        </div>
        <div>
          <img src={'/david.jpg'}/>
          <p>David Delgadillo description</p>
         
        </div>
      </div>
    </div>
  );
}

export default About;
