import React from 'react';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import I18nProvider from './components/decorator/i18n';
import Landing from './components/layout/Landing';
import Routes from './helpers/routes';

/** * Use only in server side */
function Root({ req,  i18n, isMobile}) {
  return (
    <I18nProvider i18n={i18n}>
      <Landing>
        <StaticRouter location={req.path}>
          {renderRoutes(Routes, {isMobile})}
        </StaticRouter>
      </Landing>
    </I18nProvider>
  );
}

export default Root;
