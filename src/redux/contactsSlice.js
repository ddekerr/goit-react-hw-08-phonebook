import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        const isNotExist = state.every(
          contact =>
            contact.name.toLowerCase() !== action.payload.name.toLowerCase()
        );

        if (isNotExist) {
          state.push(action.payload);
        }
      },
      prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            name: newContact.name,
            number: newContact.number,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
