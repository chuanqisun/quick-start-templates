import React from 'react';
import ReactDOM from 'react-dom';
import 'focus-visible/dist/focus-visible';
import '../styles/default-theme.css';

import { withAppShell } from '../components/app-shell/app-shell';
import { withSiteMenu } from '../components/site-menu/site-menu';
import { SiteList } from '../components/site-list/site-list';

const SiteWindow = withAppShell(withSiteMenu(SiteList));

function AppRoot() {
  return (
    <>
      <SiteWindow />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
