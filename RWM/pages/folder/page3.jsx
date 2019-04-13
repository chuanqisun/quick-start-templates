import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from '../../components/hello';
import { HelloWorld3 } from '../../components/hello-3';

function AppRoot() {
  return (
    <>
      <HelloWorld />
      <HelloWorld3 />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
