import axios from 'axios';

const API = 'http://localhost:8000/api/v1';

export const register = (data) =>
  axios.post(`${API}/auth/register/`, data);

export const login = (email, password) =>
  axios.post(`${API}/auth/login/`, { email, password });

export const getProfile = (token) =>
  axios.get(`${API}/auth/me/`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const refreshToken = (refresh) =>
  axios.post(`${API}/auth/token/refresh/`, { refresh });
