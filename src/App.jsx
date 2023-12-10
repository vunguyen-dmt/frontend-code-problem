import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PageWrap,
} from '@edx/frontend-platform/react';
import { getStudioMe } from './services/codeService';
import TestPage from './components/test/TestPage';
import IframeMaker from './components/IframeMaker/IframeMaker';
import CodeApp from './components/CodeApp/CodeApp';
import AccessDenied from './components/AccessDenied/AccessDenied';

const App = () => {
  const [studioInfo, setStudioInfo] = React.useState(null);
  React.useEffect(() => {
    getStudioMe().then(result => {
      console.log(result);
      setStudioInfo(result);
    }).catch(error => {
      if (!window.location.pathname.endsWith('/denied')) {
        const publicPath = window.location.host.endsWith('3000') ? '' : '/code';
        window.location.href = `${publicPath}/denied`;
      }
    });
  }, []);

  return (
    <Routes>
      {
    studioInfo != null && (
    <><Route
      path="/maker"
      element={<PageWrap><IframeMaker /></PageWrap>}
    />
      <Route
        path="/editor/v1"
        element={<PageWrap><CodeApp /></PageWrap>}
      />
      <Route
        path="/test"
        element={<PageWrap><TestPage /></PageWrap>}
      />
    </>
    )
    }
      <Route
        path="/denied"
        element={<PageWrap><AccessDenied /></PageWrap>}
      />
    </Routes>
  );
};

export default App;
