import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// add token to all requests in axios
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// clear token
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/**
 * POST to users/signup
 * credentials = {name, email, password}
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

/**
 * POST to users/login
 * credentials = {email, password}
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

/**
 * POST to users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

/**
 * POST to users/current
 * headers: Authorization: Bearer token
 */
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  //Reading token from state
  const { token } = thunkApi.getState().auth;
  if (token === null) {
    // if there is no token exit with reject error
    return thunkApi.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(token);
    const response = await axios.get('users/current');
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
