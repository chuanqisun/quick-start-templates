import React from 'react';
import styled from 'styled-components';
import { FullMdl2 } from '../icon/full-mdl2';

const mockStores = [
  { name: 'Japan store', url: 'https://www.fabrikam.com/jp' },
  { name: 'US store', url: 'https://www.fabrikam.us' },
  { name: 'UK store', url: 'https://www.fabrikam.com/uk' },
  { name: 'US outlets', url: 'https://www.fabrikam.us/outlets' },
  { name: 'Junior Collective', url: 'https://www.fabrikamjunior.design' },
];

export function SiteList() {
  return (
    <StyledDiv>
      <main className="layout-center-clamp">
        <h1 className="pate-title fs32">Sites</h1>

        <button className="btn new-site-button shadow--clickable btn--boxed btn--primary fs14 fw600">
          <span className="mdl2 btn__left-icon">{FullMdl2.Add}</span> Create new site
        </button>

        <ul>
          {mockStores.map(store => (
            <li key={store.url}>
              <div className="site-card shadow--clickable" href="site.html">
                <div className="site-card__left">
                  <div className="site-card__title fs24 fw6">{store.name}</div>
                  <a href="site.html" className="site-card__full-overlay link--no-style mdl2 fw7">
                    {FullMdl2.ChevronRight}
                  </a>
                  <a href="//www.bing.com" className="site-card__above-overlay" target="_blank">
                    {store.url}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .pate-title {
    margin: 40px 0 16px 0;
  }

  .new-site-button {
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    grid-gap: 16px;
  }

  li {
    display: flex;
  }

  .site-card {
    background-color: var(--clr-card-background);
    color: var(--clr-card-background-contrast);
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .site-card__full-overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
  }

  .site-card__above-overlay {
    position: relative;
    z-index: 1;
  }
`;
