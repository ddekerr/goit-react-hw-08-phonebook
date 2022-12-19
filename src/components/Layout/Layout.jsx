import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <Wrapper className='wrapper'>
      <AppBar />
      <Suspense fallback={false}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
