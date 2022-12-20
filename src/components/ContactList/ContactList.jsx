import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { removeContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import {
  ContactsTable,
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
  RemoveButton,
} from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsTable>
      <thead>
        <HeaderRow>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Phone Number</HeaderCell>
          <HeaderCell>Action</HeaderCell>
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
    </ContactsTable>
  );
};
