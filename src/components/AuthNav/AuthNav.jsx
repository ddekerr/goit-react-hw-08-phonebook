import { Wrapper, Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="register">Register</Link>
      <Link to="login">Log In</Link>
    </Wrapper>
  );
};

export default AuthNav;
