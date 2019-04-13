import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from '../components/hello';
const HelloWorld2 = React.lazy(() => import('../components/hello-2'));

function AppRoot() {
  return (
    <>
      <HelloWorld />
      <HelloWorld2 />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
