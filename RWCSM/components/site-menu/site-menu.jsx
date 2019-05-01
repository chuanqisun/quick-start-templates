import React from 'react';
import styled from 'styled-components';

import { FullMdl2 } from '../icon/full-mdl2';

export function SiteMenu() {
  return (
    <ul style={{ width: '200px' }}>
      <li>Status</li>
      <li>Pages</li>
      <li>Products</li>
      <li>Media</li>
    </ul>
  );
}

export function withSiteMenu(WrappedComponent) {
  return props => (
    <StyledDiv>
      <SiteMenu />
      <div className="canvas">
        <WrappedComponent {...props} />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  height: 100%;

  .canvas {
    flex: 1 1 auto;
    overflow: auto;
  }
`;
