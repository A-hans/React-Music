import React,{memo} from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from './router';

import HansAppHeader from '@/components/app-header';
import HansAppFooter from '@/components/app-footer';


export default memo(function APP() {
  return (
      <HashRouter>
        <HansAppHeader />
          {renderRoutes(routes)}
        <HansAppFooter />
      </HashRouter>
  )
})
