const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const isNotExist = state.every(
        contact =>
          contact.name.toLowerCase() !== action.payload.name.toLowerCase()
      );

      if (isNotExist) {
        return [...state, action.payload];
      }
      return state;
    }

    case 'contacts/removeContact': {
      return state.filter(contact => contact.id !== action.payload);
    }

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      return action.payload;
    }

    default:
      return state;
  }
};

export const rootReducer = (state = {}, action) => {
  return {
    contacts: contactsReducer(state.contacts, action),
    filter: filterReducer(state.filter, action),
  };
};
