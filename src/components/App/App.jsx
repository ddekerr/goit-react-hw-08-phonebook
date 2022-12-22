import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
