
import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </Nav>
  );
};

export default Navigation;
