/* eslint-disable max-len */
import React from 'react';
// import styles from './About.css';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
  return (
    <AboutStyled>
  

      
      <div className="description">

        <h1>The Ballad of Chordial</h1>
        <p>After downing a caraffe of coffee, inspiration struck!  
          What if there was an app that helped write chord changes for songs? 
          And from that intial proclamation, our intrepid team of developers brainstormed 
          and coded tirelessly to create: Chordial.  
          No longer would tired musicians have to think up another set of chord changes.  
          Chordial provides users a bevy of harmonic chord destinations relating to their previous choices.  
          This ensures that every sequence created will in the end sound harmonically pleasing, regardless of a users knowledge of chordal music theory.
        </p>
      </div>

      <h1 
        style={{ fontFamily: 'Concert One' }}
      >
        The Devs
      </h1>
      <div className="devs-container">

        
        <div className="dev">
          <img src={'/casey.jpg'}/>
          <h2>Casey</h2>
          <p>Casey is a full stack software engineer and music wizard.</p>
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
        <div className="dev">
          <img src={'/kalan.jpg'}/>
          <h2>Kalan</h2>
          <p>Kalan is a full stack software developer and music warlock.</p>
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
        <div className="dev">
          <img src={'/david.jpg'}/>
          <h2>David</h2>
          <p>David is a kick-ass software dev and doesn't know a thing about music-- just good design.</p>
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
            
      </div>
          
          
    

  

    </AboutStyled>
  );
}

export default About;

const AboutStyled = styled.div`
&::-webkit-scrollbar {
  display: none;
}
  background-color: #c764ee55;
  padding: 2rem;
  width: 95%;
  height: 75vh;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px black;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  .description {
    margin-top: 22rem;
    text-align: center;
    padding-bottom: 2rem;
    height: 800px;


    h1 {
      font-family: 'Concert One';
      font-size: 2rem;
    }

    p {
      font-family: 'Righteous';
      font-size: 1.6rem;
      line-height: 1.5;
      padding: 2rem;
    }
  }

  .devs-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem;

    .dev {
      width: 350px;
      text-align: center;
      padding: 1rem;
        background-color: #85affd9e;
        border-radius: 15px;
        box-shadow: 0px 0px 10px 0px black;

        .icon {
          margin: 0 0.6rem;
          font-size: 2rem;
        }
        img {
          
          height: 250px;
          width: 250px;
          object-fit: contain;
        }

        p {
          padding: 1rem;
        }
    }


  }



`;
