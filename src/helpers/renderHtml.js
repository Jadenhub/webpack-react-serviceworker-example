import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { MOBILE } from '../constants/devices';
import Root from '../Root';
import { getTranslation } from './i18n';
import { getDeviceType } from './userAgent';

function getProps(props){
  return`
    <script>
      window.__PAGE_PROPS__ = ${JSON.stringify(props).replace(
        /</g,
        '\\u003c'
      )}
    </script>
  `
}

const render = async (req) => {
  const sheet = new ServerStyleSheet();
  try {
    const i18n = getTranslation();
    const isMobile = getDeviceType(req) === MOBILE;
    const content = renderToString(sheet.collectStyles(
      <Root
        isMobile={isMobile}
        req={req}
        i18n={i18n}
      />
    ));
    const styleTags = sheet.getStyleTags();
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <link href="/favicon.ico" rel="icon">
          <title>${i18n['META_TITLE']}</title>
          <meta charSet='utf-8'>
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport'>
          ${styleTags}
          <link rel="preload" href="/main.css" as="style"/>
          <link rel="stylesheet" href="/main.css">
        </head>
        <body>
          <div id='root'>${content}</div>
          ${getProps({i18n, isMobile})}
          <script src="/bundle.js"></script>
        </body>
      </html>
    `;
    return html;
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }
};

export default render;