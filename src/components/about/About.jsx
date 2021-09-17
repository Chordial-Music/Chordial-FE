/* eslint-disable max-len */
import React from 'react';
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
          And from that intial idea, this amazing team of developers brainstormed 
          and coded tirelessly to create Chordial.  
          No longer would tired musicians have to think up another set of chord changes.  
          Chordial provides users a bevy of harmonic chord destinations relating to their previous choices.  
          This ensures that every sequence created will in the end sound harmonically pleasing, regardless of a users knowledge of chordal music theory.
        </p>
      </div>

      <h1 
        style={{ fontFamily: 'Concert One', paddingBottom: '1rem' }}
      >
        The Devs
      </h1>
      <div className="devs-container">
        <div className="dev">
          <img src={'/casey.jpg'}/>
          <h2>Casey</h2>
          <p>Casey is a kick-ass full stack software engineer and music wizard.</p>
          <a href="https://github.com/CaseyCameron" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
          <a href="https://www.linkedin.com/in/casey-cameron/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
        </div>
        <div className="dev">
          <img src={'/kalan.jpg'}/>
          <h2>Kalan</h2>
          <p>Kalan is a kick-ass full stack software developer and music warlock.</p>
          <a href=" https://github.com/prudhomk" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
          <a href="https://www.linkedin.com/in/kalanprudhomme/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
        </div>
        <div className="dev">
          <img src={'/david.jpg'}/>
          <h2>David</h2>
          <p>David is a kick-ass software dev and doesn't know a thing about music-- just good design.</p>
          <a href="https://github.com/David-Del1" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
          <a href="https://www.linkedin.com/in/davidadelgadillo/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
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
  width: 97%;
  height: 80vh;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px black;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;

  .description {
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Concert One';
      font-size: 2rem;
      padding: 2rem 0;
    }

    p {
      font-family: 'Righteous';
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
      width: 90%;
      line-height: 1.5;
      background-color: #ffffff92;
      border-radius: 1rem;
    }
  }

  .devs-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: 2rem;

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
          transition: all ease-in-out 0.15s;
          &:hover {
            color: #f6d569;
          }
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

  @media only screen and (max-width: 1000px) {
    &::-webkit-scrollbar {
      display: none;
    }
      background-color: #c764ee55;
      width: 97%;
      height: 100%;
      border-radius: 40px;
      box-shadow: 0px 0px 15px 0px black;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 10px;
  
      .description {
        width: 100%;
        text-align: center;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          font-family: 'Concert One';
          font-size: 2rem;
          padding: 2rem 0;
        }
    
        p {
          font-family: 'Righteous';
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
          width: 90%;
          line-height: 1.5;
          background-color: #ffffff92;
          border-radius: 1rem;
        }
      }
    
      .devs-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding-bottom: 2rem;

        .dev {
          width: 350px;
          text-align: center;
          padding: 1rem;
          margin: 10px;
            background-color: #85affd9e;
            border-radius: 15px;
            box-shadow: 0px 0px 10px 0px black;
    
            .icon {
              margin: 0 0.6rem;
              font-size: 2rem;
              transition: all ease-in-out 0.15s;
              &:hover {
                color: #f6d569;
              }
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
  }
`;
