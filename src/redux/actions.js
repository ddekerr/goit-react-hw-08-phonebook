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
  // const isNotExist = contacts.every(
  //   contact => contact.name.toLowerCase() !== newContact.name.toLowerCase()
  // );

  // if (isNotExist) {
  //   const addedContact = {
  //     id: nanoid(),
  //     name: newContact.name,
  //     number: newContact.number,
  //   };
  //   setContacts(prevContacts => prevContacts.concat(addedContact));
  // } else {
  //   alert(`${newContact.name} is alredy in contacts.`);
  // }
};

export const removeContact = contactId => {
  return {
    type: 'contacts/removeContact',
    payload: contactId,
  };
  // setContacts(prevContacts =>
  //   prevContacts.filter(contact => contact.id !== contactId)
  // );
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
  // setFilter(e.target.value);
};
