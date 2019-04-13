import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from '../components/hello';
import { HelloWorld2 } from '../components/hello-2';

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
