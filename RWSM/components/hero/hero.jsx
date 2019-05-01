import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/images/Hero.svg';

export function Hero() {
  return (
    <StyledDiv>
      <img className="background-image" src={HeroImage} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  --min-height: 20rem;
  --max-height: calc(100vh - 10rem); /* TODO, need header height to calculate offset */

  position: relative;

  .background-image {
    width: 100%;
    min-height: var(--min-height);
    max-height: var(--max-height);
    object-fit: cover;
  }
`;
