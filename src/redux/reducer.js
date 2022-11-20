const initialState = {
  contacts: [
    { id: 0, name: 'Dina', number: '647632' },
    { id: 1, name: 'Dima', number: '644342632' },
  ],
  filter: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case 'contacts/removeContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      return {
        ...state,
        filter: action.payload,
      };
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
