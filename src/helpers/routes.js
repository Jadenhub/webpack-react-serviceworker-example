import Home from '../pages/index';
import Custom404 from '../pages/404';
import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    render: (props)=> <Home {...props} />,
  },
  {
    path: '*',
    component: Custom404,
    exact: true
  }
]

export default routes