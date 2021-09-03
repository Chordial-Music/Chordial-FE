/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = props => {
  return <BackdropStyled onClick={props.onConfirm} />;
};

//Takes in Props to provide custom alert messages

const ModalOverlay = props => {
  return (
    <ModalStyled>
      <header className="header">
        <h2 className="header">{props.title}</h2>
      </header>
      <div>
        <p className="modal-text">{props.message}</p>
      </div>
      <footer>
        <button 
          onClick={props.onConfirm}
          className="confirm-btn"
        >Okay</button>
      </footer>
    </ModalStyled>
  );
};

const AlertModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )};
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')
      )};
    </>
  );
};

export default AlertModal;

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalStyled = styled.section`
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 40%;
  height: 400px;
  z-index: 1010;
  overflow: hidden;
  background-color: white;
  opacity: 0.8;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .header {
    font-family: 'Concert One';
    font-size: 2rem;
  }

  .modal-text {
    font-size: 1.3rem;
    text-align: center;
    padding: 0 2rem;
  }

  .confirm-btn {
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: all ease-in-out 0.15s;

    &:hover {
      background-color: lightskyblue;
    }
  }
`;
