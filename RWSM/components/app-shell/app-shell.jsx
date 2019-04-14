import React from 'react';
import styled from 'styled-components';

import Avatar from '../../assets/images/UserAvatar02.png';
import { FullMdl2 } from '../icon/full-mdl2';

export function AppShell() {
  return (
    <StyledHeader>
      <button className="waffle-button mdl2">{FullMdl2.WaffleOffice365}</button>
      <div className="app-name">Rushmore</div>
      <button className="me-button">
        <img className="avatar" src={Avatar} />
        <div className="me-button__status" />
      </button>
    </StyledHeader>
  );
}

export function withAppShell(WrappedComponent) {
  return props => (
    <StyledDiv>
      <AppShell />
      <div className="main-body">
        <WrappedComponent {...props} />
      </div>
    </StyledDiv>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex: 0 0 auto;

  background-color: var(--clr-accent);

  .waffle-button {
    width: 48px;
    height: 48px;
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: none;
  }

  .app-name {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin: 0 auto 0 8px;
  }

  .avatar {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  .me-button {
    background-color: transparent;
    border: none;
    position: relative;
    width: 48px;
    height: 48px;
  }

  .me-button__status {
    position: absolute;
    right: 6px;
    bottom: 6px;

    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(127, 186, 0);
  }
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .main-body {
    flex: 1 1 auto;
    overflow: auto;
    background-color: var(--clr-page-background);
  }
`;
