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

export const GalleryBox = styled.div`
  padding-top: calc(var(--spacer-x4) * 4);
`;

export const GallerySlide = styled.a`
  position: relative;
  display: block;
  padding-bottom: 100%;

  &::before {
    font-family: termina, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    content: counter(gallery-counter, decimal-leading-zero);
    position: absolute;
    left: 0;
    bottom: calc(100% + 1em);
    font-size: 11px;
    color: var(--somewhere-offwhite);
    opacity: 0.5;
  }

  & > img {
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

export const H2 = styled.div`
  font-size: var(--font-size-4xl);
  line-height: 1;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: var(--bs-heading-color);
`;


export const GalleryFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacer-x2);
  margin-top: var(--spacer-x4);
`;

