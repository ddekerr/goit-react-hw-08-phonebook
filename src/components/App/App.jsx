import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import { refresh } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        'refresh user'
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="contacts" element={<ContactsPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
          </Route>
        </Routes>
      )}

      <ToastContainer />
    </>
  );
};
