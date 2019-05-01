import React, { useEffect, useRef, lazy } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from '../styles';

export const hashToComponentMap = {
  '#hero': {
    name: 'Hero',
    component: lazy(() => import('../components/hero/hero.demo')),
  },
};

function AppRoot() {
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleHashchange() {
      iframeRef.current.contentWindow.location.hash = location.hash;
    }

    window.addEventListener('hashchange', handleHashchange);

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashchange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ul>
        {Object.entries(hashToComponentMap).map(([key, value]) => (
          <a key={key} href={key}>
            {value.name}
          </a>
        ))}
      </ul>
      <iframe src={`./embed-host.html${location.hash}`} ref={iframeRef} />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
