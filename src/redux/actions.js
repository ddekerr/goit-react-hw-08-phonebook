import { nanoid } from 'nanoid';

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    },
  };
};

export const removeContact = contactId => {
  return {
    type: 'contacts/removeContact',
    payload: contactId,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
