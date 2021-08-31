import { get, post } from './request';

export const postSignup = (username, password) => {
  return post('/api/v1/auth/signup', { username, password });
};

export const postLogin = (username, password) => {
  return post('/api/v1/auth/login', { username, password });
};

export const fetchVerify = () => get('/api/v1/auth/verify');

export const logout = () => {
  return get('/api/v1/auth/logout');
};