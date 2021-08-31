import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup } from '../state/SessionProvider';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const signup = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup({ username, password });
    history.push('/');
  };

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />

        <button>Signup</button>
      </form>
    </>
  );
}
