"use client";

import styled from "styled-components";


export const GalleryContainer = styled.div`
  overflow: hidden;
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  padding-top: calc(var(--spacer-x3) * 3);
  padding-bottom: calc(var(--spacer-x3) * 3);
  background-color: var(--somewhere-green);
  color: var(--somewhere-offwhite);
`;

export const H2 = styled.div`
  font-size: var(--font-size-4xl);
  line-height: 1;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: var(--bs-heading-color);
`;