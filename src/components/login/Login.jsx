import React, { useState } from 'react';
//import login 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login(username, password);
  };

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  return (
    <>
      hello
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='username'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          placehowlder='password'
          value={password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </>
  )
};
