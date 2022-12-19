import { NavLink } from 'react-router-dom';
import { Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Wrapper>
  );
};

export default AuthNav;
