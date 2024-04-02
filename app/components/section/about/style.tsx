"use client";

import styled from "styled-components";

export const AboutContaner = styled.div`
  padding-top: calc(var(--spacer-x4) * 4);
  padding-bottom: calc(var(--spacer-x4) * 4);
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
`;

export const AboutContanerInner = styled.div`
  max-width: 2200px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutContanerInnerRow = styled.div`
  --bs-gutter-y: 0;
  --bs-gutter-x: var(--spacer-x2);
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  & > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;

export const AboutContanerInnerRow2 = styled(AboutContanerInnerRow)`
  align-items: flex-end;
`;

export const AboutContanerInnerColumnOne = styled.div`
  padding-bottom: calc(var(--spacer-x3) * 3);
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const AboutContanerInnerColumnTwo = styled.div`
  flex: 0 0 auto;
  margin-left: 25%;
  width: 41.66666667%;
  @media (min-width: 992px) {
    margin-left: 8.33333333%;
  }
`;

export const H2 = styled.h2`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.625rem;
  z-index:10;
`;

export const H3 = styled.h3`
  margin-top: 0.75em;
  width: 100%;
  max-width: 12em;
  font-size: var(--font-size-2xl);
  line-height: 1.1;
  font-family: ivypresto-display, serif;
  font-weight: 100;
  font-style: normal;

  & > p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.1;
  }
`;

export const MediaFill = styled.div`
  position: relative;
  padding-bottom: 120%;
  overflow: hidden;
  & > img {
    height: 125%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

export const Col2 = styled.div`
  padding-top: calc(var(--spacer-x3) * 3);
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  @media (min-width: 992px) {
    margin-left: 4.16666667%;
  }
`;

export const Col3 = styled.div`
  @media (min-width: 1200px) {
    margin-left: 4.16666667%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
`;

export const RichText = styled.div`
  max-width: 30em;
  width: 100%;

  & + p {
    margin: 0 0 1.5em 0;
  }

  & p {
    padding: 0;
    list-style: none;
    line-height: 1.625;
    color: var(--somewhere-navy-25);
  }
`;

export const Col3MediaFill = styled.div`
  @media (min-width: 992px) {
    transform: translateY(50%);
  }
  overflow: hidden;
  position: relative;
  padding-bottom: 100%;
  & > img {
    height: 125%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

export const RowCol1 = styled.div`
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
`;

export const ConnectBlock = styled.div`
  @media (min-width: 992px) {
    padding: var(--spacer-x6);
  }
  color: var(--somewhere-white);
`;

export const ConnectBlockContainer = styled.div`
  @media (min-width: 992px) {
    max-width: 2200px;
    margin-left: auto;
    margin-right: auto;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: min(56.25vmax, 90vh);
  text-align: center;
  color: var(--somewhere-white);
  background: var(--somewhere-navy);
  overflow: hidden;
  position: relative;
  padding-top: calc(var(--spacer-x4) * 4);
  padding-bottom: calc(var(--spacer-x4) * 4);
  & > img {
    height: 125%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

export const ConnectH2 = styled.h2`
  position: relative;
  z-index: 10;
  margin-top: 0.75em;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  font-size: var(--font-size-2xl);
  line-height: 1.1;
  color: var(--bs-heading-color);
`;

export const SocialLinks = styled.div`
  position: relative;
  z-index: 2;
  margin-top: var(--font-size-2xl);
  gap: 0;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
`;


export const ConnectH6 = styled(H2)`
  color:white;
`;
