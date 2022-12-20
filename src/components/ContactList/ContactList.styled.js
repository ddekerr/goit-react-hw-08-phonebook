import styled from '@emotion/styled';

export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  color: #757575;
`;

export const Row = styled.tr`
  :hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
`;

export const Cell = styled.td`
  padding: 10px;
  border: 1px solid #f4f4f4;

  :last-of-type {
    text-align: center;
  }
`;

export const HeaderRow = styled.tr`
  border: 1px solid #f4f4f4;
  border-bottom-width: 2px;
  font-weight: 500;
  color: #616161;
`;

export const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;

  :not(:last-of-type) {
    border-right: 1px solid #f4f4f4;
  }

  :last-of-type {
    text-align: center;
  }
`;

export const RemoveButton = styled.button`
  padding: 10px;
  min-width: 75px;
  border: none;
  border-radius: 5px;

  background-color: #e77;
  color: #fff;
  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e33;
  }
`;
