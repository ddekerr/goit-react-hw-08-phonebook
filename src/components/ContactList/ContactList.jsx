import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/actions';
import {
  ContactListContainer,
  HeaderCell,
  HeaderRow,
  Row,
  Cell,
  RemoveButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListContainer>
      <thead>
        <HeaderRow>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Phone Number</HeaderCell>
          <HeaderCell></HeaderCell>
        </HeaderRow>
      </thead>
      <tbody>
        {filteredContacts.map(({ id, name, number }) => (
          <Row key={id}>
            <Cell>{name}</Cell>
            <Cell>{number}</Cell>
            <Cell>
              <RemoveButton
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </RemoveButton>
            </Cell>
          </Row>
        ))}
      </tbody>
    </ContactListContainer>
  );
};
