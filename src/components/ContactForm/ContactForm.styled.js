import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ContactFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 20px;

  border-radius: 10px;
  border: 1px solid #000;
`;

export const FormField = styled.label``;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;

  background-color: #07e;
  color: #fff;
  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #04e;
  }
`;
