'use client'

import styled from "styled-components";


export const NewsLetterSignUp = styled.div`
  padding-top: calc(var(--spacer-x2) * 3);
  padding-bottom: calc(var(--spacer-x2) * 3);
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  background-color: var(--somewhere-navy-10);
  color: var(--somewhere-offwhite);
`;


export const Row = styled.div`
  --bs-gutter-x: var(--spacer-x2);
  align-items: center;
  --bs-gutter-y: 0;
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

export const Col1 = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
`;

export const Col2 = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
`;

export const H2 = styled.h2`
  max-width: 16em;
  width: 100%;
  font-size: var(--font-size-lg);
  font-family: ivypresto-display, serif;
  font-weight: 100;
  font-style: normal;
  line-height: 1.2;
  color: var(--bs-heading-color);

  > p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const FormOuterbox = styled.div`
  -webkit-overflow-scrolling: touch;
  max-width: 40rem !important;
`;


export const FormInner = styled.div`
  animation: none;
  animation-delay: 0;
  animation-direction: normal;
  animation-duration: 0;
  animation-fill-mode: none;
  animation-iteration-count: 1;
  animation-name: none;
  animation-play-state: running;
  animation-timing-function: ease;
  backface-visibility: visible;
  background: 0;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position: 0 0;
  background-position-x: 0;
  background-position-y: 0;
  background-repeat: repeat;
  background-size: auto auto;
  border: 0;
  border-style: none;
  border-width: medium;
  border-color: inherit;
  border-bottom: 0;
  border-bottom-color: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-collapse: separate;
  border-image: none;
  border-left: 0;
  border-left-color: inherit;
  border-left-style: none;
  border-left-width: medium;
  border-radius: 0;
  border-right: 0;
  border-right-color: inherit;
  border-right-style: none;
  border-right-width: medium;
  border-spacing: 0;
  border-top: 0;
  border-top-color: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-style: none;
  border-top-width: medium;
  bottom: auto;
  box-shadow: none;
  box-sizing: content-box;
  caption-side: top;
  clear: none;
  clip: auto;
  color: inherit;
  columns: auto;
  column-count: auto;
  column-fill: balance;
  column-gap: normal;
  column-rule: medium none currentColor;
  column-rule-color: currentColor;
  column-rule-style: none;
  column-rule-width: none;
  column-span: 1;
  column-width: auto;
  content: normal;
  counter-increment: none;
  counter-reset: none;
  cursor: auto;
  direction: ltr;
  display: block;
  empty-cells: show;
  float: none;
  font: normal;
  font-family: inherit;
  font-size: medium;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  height: auto;
  hyphens: none;
  left: auto;
  letter-spacing: normal;
  line-height: normal;
  list-style: none;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: disc;
  margin: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  opacity: 1;
  orphans: 0;
  outline: 0;
  outline-color: invert;
  outline-style: none;
  outline-width: medium;
  overflow: visible;
  overflow-x: visible;
  overflow-y: visible;
  padding: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: auto;
  perspective: none;
  perspective-origin: 50% 50%;
  pointer-events: initial;
  position: static;
  right: auto;
  tab-size: 8;
  table-layout: auto;
  text-align: inherit;
  text-align-last: auto;
  text-decoration: none;
  text-decoration-color: inherit;
  text-decoration-line: none;
  text-decoration-style: solid;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  top: auto;
  transform: none;
  transform-style: flat;
  transition: none;
  transition-delay: 0s;
  transition-duration: 0s;
  transition-property: none;
  transition-timing-function: ease;
  unicode-bidi: normal;
  vertical-align: baseline;
  visibility: visible;
  white-space: normal;
  widows: 0;
  width: auto;
  word-spacing: normal;
  z-index: auto;
  -webkit-font-smoothing: antialiased;
`;

export const Form = styled(FormInner)`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  overflow: visible;
  border-radius: 0px;
  border-style: none;
  border-width: 0px;
  border-color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position-y: 50%;
  padding: 0px;
  max-width: 40rem !important;
`;

export const FormInnner2 = styled(FormInner)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  padding: 0px;
  min-height: 0px;
  justify-content: center;
`;

export const FormRow1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
`;

