import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing from '../components/layout/Landing';
import '../css/global.css';
import '../css/normalize.css';
import { renderRoutes } from 'react-router-config';
import routes from '../helpers/routes';
import I18nProvider from '../components/decorator/i18n';

const {i18n, ...otherProps} = window.__PAGE_PROPS__;
// Allow the passed state to be garbage-collected
delete window.__PAGE_PROPS__;

ReactDOM.hydrate(
  <I18nProvider i18n={i18n}>
    <Landing>
      <BrowserRouter>
        {renderRoutes(routes, {...otherProps})}
      </BrowserRouter>
    </Landing>
  </I18nProvider>,
  document.getElementById('root')
);


if('serviceWorker' in navigator){
  window.addEventListener('load', function() {
    navigator.serviceWorker
    .register('/service-worker.js')
    .then(function(){
      console.log('Service Worker registered.');
    }).catch(function(error) {
      console.log('Service worker registered failed.', error);
    });
  });
} else {
  console.log('Service worker is not supported');
}
