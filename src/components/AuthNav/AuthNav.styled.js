import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 10px;

  color: #1e88e5;
  text-transform: uppercase;
  font-weight: 500;

  transition: transform 500ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
