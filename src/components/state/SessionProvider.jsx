/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchVerify, postLogin, postSignup } from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchVerify()
      .then((user) => setSession(user))
      .catch((err) => console.error(err));
  }, []);

  // need post signup

  const login = async ({ username, password }) => {
    setSession(await postLogin(username, password));
    //history push here
    history.push('/');
  };

  const signup = async ({ username, password }) => {
    console.log('function', username, password);
    setSession(await postSignup(username, password));
    history.push('/');
  };

  return (
    <SessionContext.Provider value={{ session, login, signup }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useLogin = () => {
  const { login } = useContext(SessionContext);
  return login;
};

export const useSignup = () => {
  const { signup } = useContext(SessionContext);
  return signup;
};

export const useSession = () => {
  const { session } = useContext(SessionContext);
  return session;
};