import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30%;
  padding: 20px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 21px;
  text-align: center;
`;

export const RegisterForm = styled(Form)``;

export const Group = styled.div`
  display: flex;
  margin-bottom: 20px;

  color: #67757c;
`;

export const Label = styled.div`
  display: inline-block;
  flex-basis: 20%;

  margin-right: 5px;
`;

export const Input = styled(Field)`
  flex-basis: 80%;
  padding: 5px 10px;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-color: #d2d6de;
`;

export const Button = styled.button`
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: 5px 10px;

  border-radius: 4px;
  color: #fff;
  border: 1px solid transparent;
  border-color: #1e88e5;
  background-color: #1e88e5;
  cursor: pointer;

  text-align: center;
`;