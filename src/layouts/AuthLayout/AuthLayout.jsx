import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <>
      <h1>I'm the Auth Layout Page.</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
