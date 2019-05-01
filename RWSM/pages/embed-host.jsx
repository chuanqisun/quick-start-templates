import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from '../styles';

import { hashToComponentMap } from './style-guide.jsx';

function AppRoot() {
  const [CurrentComponent, setCurrentComponent] = useState(<div>Nothing</div>);

  useEffect(() => {
    function handleHashchange() {
      const StyleGuideEntry = hashToComponentMap[location.hash];
      if (StyleGuideEntry) {
        setCurrentComponent(<StyleGuideEntry.component />);
      }
    }

    window.addEventListener('hashchange', handleHashchange);

    handleHashchange(); // check hash immediately

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashchange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>{CurrentComponent}</Suspense>
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
