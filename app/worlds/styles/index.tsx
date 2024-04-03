"use client";

import styled from "styled-components";

export const HeroMain = styled.div`
  margin: auto;
  padding-top: calc(var(--spacer-x4) * 4);
  padding-bottom: calc(var(--spacer-x4) * 4);
  margin-top: 75px;
  margin-bottom: 75px;
`;

export const H1 = styled.h1`
  width: 100%;
  max-width: 10em;
  font-size: var(--font-size-3xl);
  line-height: 1.1;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;

  & span[
    display: inline-block;
  ]
  color: var(--somewhere-offwhite);
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  @media (min-width: 992px) {
    padding-bottom: calc(
      (50vw - var(--spacer-x6) - var(--spacer-x2) * 0.5) * 0.375
    );
  }
  padding-top: 5rem;
  supports (height: 100svh) {
    min-height: 100svh;
  }
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  text-align: center;
`;

export const WordListingContainer = styled.div`
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  z-index: 2;
  position: relative;
`;

export const WordListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacer-x2);
  justify-content: center;
  margin-top: calc((100vw - var(--spacer-x6) * 2) * -0.375);
  max-width: 2200px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 992px) {
    margin-top: calc(
      (50vw - var(--spacer-x6) - var(--spacer-x2) * 0.5) * -0.375
    );
  }
`;

export const WordListingItem = styled.div`
  width: calc(50% - var(--spacer-x2) * 0.5);
  aspect-ratio: 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacer-x2);
  padding: calc(var(--spacer-x2) * 3) var(--spacer-x4);
  text-align: center;
  position: relative;
  background-color: var(--somewhere-navy);
  color: var(--somewhere-offwhite);
  & > img {
    opacity: 0.35;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const Termina = styled.div`
  position: relative;
`;
