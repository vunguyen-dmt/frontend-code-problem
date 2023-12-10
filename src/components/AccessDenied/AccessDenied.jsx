import React from 'react';
import Header from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';

const AccessDenied = () => (
  <div>
    <Header />
    <p className="text-center mt-6 mb-6">Permission denied.</p>
    <Footer />
  </div>
);

export default AccessDenied;
