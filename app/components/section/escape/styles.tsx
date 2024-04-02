"use client";
import styled from "styled-components";

export const EscapeContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: min(56.25vmax, 100vh);
  overflow: hidden;
  position: relative;
  padding-bottom: calc(var(--spacer-x3) * 3);
  padding-top: calc(var(--spacer-x4) * 4);
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  background-color: var(--somewhere-navy);
  color: var(--somewhere-offwhite);
  @media (min-width: 992px) {
    align-items: flex-start;
    text-align: left;
  }

  & > img {
    height: 125%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    display: block;
    max-width: 100%;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

export const Escapeh2 = styled.h2`
  font-size: var(--font-size-4xl);
  line-height: 1;
  color: var(--bs-heading-color);
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
`;

export const EscapeButton = styled.a`
  --btn-hover-color: var(--somewhere-navy);
  --btn-hover-bg: var(--somewhere-offwhite);
  --btn-color: var(--somewhere-offwhite);
  --btn-bg: var(--somewhere-gold);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: clamp(44px, 0.8vw + 40.8px, 60px);
  overflow: hidden;
  padding: 0 calc(var(--spacer-x3) * 1.5);
  text-align: center;
  background: var(--btn-bg);
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  text-decoration: none;
  cursor:pointer;
  z-index:10;
`;
