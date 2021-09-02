/* eslint-disable max-len */
import React, { useState } from 'react';
import AlertModal from '../common/AlertModal';
import { useLogin, useSession } from '../state/SessionProvider';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState();
  const { session } = useSession();

  const history = useHistory();
  const login = useLogin();

  const alertHandler = () => {
    //setAlert to falsey value to dismiss alert
    setAlert(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    // if(login.request === 'error') {
    //   setAlert({
    //     title: 'Incorrect Credentials',
    //     message: 'Please enter the correct username or password to login'
    //   });
    // }
      
    history.push('/');
  };

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUsername(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  return (
    <>
      {alert && <AlertModal title={alert.title} message={alert.message} onConfirm={alertHandler} />}
      <LoginStyled>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="username"
            required
            onChange={handleChange}
            value={username}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={handleChange}
          />

          <button>Login</button>
        </form>
      </LoginStyled>
    </>
  );
}

const LoginStyled = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    background-color: #5bf1ff7d;
    border-radius: 10px;
    height: 600px;
    width: 450px;

    label {
      font-size: 1.5rem;
      
    }

    input {
      padding: 0.5rem;
      background: transparent;
      outline: none;
      font-size: 1.5rem;
      border: none;
      border-bottom: 1px solid black
    }

    button {
      margin-top: 2rem;
      padding: 1.5rem;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.5rem;
      transition: all ease-in-out 0.15s;
      /* width: 100px; */
      margin: 0 auto;
      text-align: center;
      border-radius: 10px;

      &:hover {
        color: white;
        background-color: #49e00d;
      }
    }
  }
`;
