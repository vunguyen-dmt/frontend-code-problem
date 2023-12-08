import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import {
  AppProvider, ErrorPage, PageWrap,
} from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import messages from './i18n';
import CodeApp from './components/CodeApp/CodeApp';
import './index.scss';
import TestPage from './components/test/TestPage';
import IframeMaker from './components/IframeMaker/IframeMaker';
import AccessDenied from './components/AccessDenied/AccessDenied';
import CheckPermission from './components/CheckPermission';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <CheckPermission />
      <Routes>
        <Route
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
        <Route
          path="/denied"
          element={<PageWrap><AccessDenied /></PageWrap>}
        />
      </Routes>
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});
