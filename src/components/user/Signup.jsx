import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup } from '../state/SessionProvider';
import styled from 'styled-components';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const signup = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup({ username, password });
    history.push('/');
    // window.location.reload();
  };

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUsername(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  return (
    <SignupStyled>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="username"
          required
          value={username}
          onChange={handleChange}
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

        <button>Signup</button>
      </form>
    </SignupStyled>
  );
}

const SignupStyled = styled.div`
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
