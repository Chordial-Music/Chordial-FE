import React, { useState } from 'react';
import { useLogin } from '../state/SessionProvider';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = useLogin();


  const handleSubmit = async (e) => {
    console.log('login', 'you have logged in');
    e.preventDefault();
    login({ username, password });
    
  };

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUsername(target.value);
    if(target.name === 'password') setPassword(target.value);
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

        <button>Login</button>
      </form>
    </>
  );
}
