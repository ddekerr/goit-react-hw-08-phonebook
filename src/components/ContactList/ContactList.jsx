import PropTypes from 'prop-types';
import {
  ContactListContainer,
  HeaderCell,
  HeaderRow,
  Row,
  Cell,
  RemoveButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, remove }) => {
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
        {contacts.map(({id, name, number}) => (
          <Row key={id}>
            <Cell>{name}</Cell>
            <Cell>{number}</Cell>
            <Cell>
              <RemoveButton type="button" onClick={() => remove(id)}>
                Delete
              </RemoveButton>
            </Cell>
          </Row>
        ))}
      </tbody>
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};
