import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(newContact) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name: newContact.name,
    //         number: newContact.number,
    //       },
    //     };
    //   },
    // },
    // removeContact(state, action) {
    //   return state.filter(contact => contact.id !== action.payload);
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
