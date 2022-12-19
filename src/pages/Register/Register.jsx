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

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Header>Register Form</Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <RegisterForm autoComplete="off">
          <Group>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter your name"
              required
            />
          </Group>
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
          <Button type="submit">Sign Up</Button>
        </RegisterForm>
      </Formik>
    </Container>
  );
};

export default RegisterPage;
