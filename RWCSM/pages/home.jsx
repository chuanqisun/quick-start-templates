import React from 'react';
import ReactDOM from 'react-dom';
import 'focus-visible/dist/focus-visible';
import '../styles/default-theme.css';

import { withAppShell } from '../components/app-shell/app-shell';
import { SiteList } from '../components/site-list/site-list';

const HomeWindow = withAppShell(SiteList);

function AppRoot() {
  return (
    <>
      <HomeWindow />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
