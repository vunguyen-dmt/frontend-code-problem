import React from 'react';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

const CheckPermission = () => {
  const user = getAuthenticatedUser();
  console.log(user);
  if (!user && !window.location.pathname.endsWith('denied')) {
    const publicPath = window.location.host.endsWith('3000') ? '' : '/code';
    window.location.href = `${publicPath}/denied`;
  }
  return <></>;
};

export default CheckPermission;
