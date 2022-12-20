import {
  Container,
  Header,
  RegisterForm,
  Group,
  Label,
  Input,
  Button,
} from 'components/Form.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Container>
      <Header>Login Form</Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <RegisterForm autoComplete="off">
          <Group>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="E-mail must be rigth format"
              placeholder="Enter your e-mail"
              required
            />
          </Group>
          <Group>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
              title="Password must contain minimum eight characters, at least one letter, one number and one special character"
              placeholder="Enter your password"
              required
            />
          </Group>
          <Button type="submit">Sign In</Button>
        </RegisterForm>
      </Formik>
    </Container>
  );
};

export default LoginPage;
