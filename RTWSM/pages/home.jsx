import React from 'react';
import ReactDOM from 'react-dom';

import { Hero } from '../components/hero/hero';
import { GlobalStyle } from '../styles';

function AppRoot() {
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
