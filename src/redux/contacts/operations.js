import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

/**
 * Get all user's contacts
 * @retrun arr of objects: {name, number}
 */
export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Create new user's contact
 * @param newContact: {name, number}
 * @retrun object: {name, number}
 */
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Delete user's contact
 * @param contactId: integer
 * @retrun object: {name, number}
 */
export const removeContact = createAsyncThunk(
  'contacts/removeContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
