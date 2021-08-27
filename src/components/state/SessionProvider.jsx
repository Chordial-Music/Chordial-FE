import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchVerify, postLogin, postSignup } from '../services/auth'

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetchVerify()
      .then((user) => setSession(user))
      .catch((err) => console.error(err));
  }, []);

  // need post signup

  const login = async (username, password) => {
    setSession(await postLogin(username, password));
    //history push here
    console.log('you are logged in');
  };

  return (
    <SessionContext.Provider value={{ session, login }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useLogin = () => {
  const { login } = useContext(SessionContext);
  return login;
};
