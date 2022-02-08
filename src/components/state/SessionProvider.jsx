/* eslint-disable max-len */

/* eslint-disable react/prop-types */ 
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
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

  const login = async ({ username, password }) => {
    setSession(await postLogin(username, password));
    history.push('/');
  };

  const signup = async ({ username, password }) => {
    setSession(await postSignup(username, password));
    history.push('/');
  };

  return (
    <SessionContext.Provider value={{ session, setSession, login, signup }}>
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
  const { session, setSession } = useContext(SessionContext);

  return { session, setSession };
};

export const PrivateRoute = (props) => {
  const { session } = useSession();
  if(!session) return <Redirect to={'/'} />;
  
  return <Route {...props} />;
};
