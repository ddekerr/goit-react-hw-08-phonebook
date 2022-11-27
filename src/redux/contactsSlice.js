import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';
// import { nanoid } from 'nanoid';

const operations = [fetchContacts, addContact, removeContact];
const getOperation = type => operations.map(operation => operation[type]);

// Reducers
const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};
const removeContactSuccessReduser = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(removeContact.fulfilled, removeContactSuccessReduser)
      .addMatcher(isAnyOf(...getOperation('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getOperation('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getOperation('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
