"use client";

import styled from "styled-components";

export const NavMenuBox = styled.div`
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

export const NavMenu_Overlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 28, 34, 0.95);
  opacity: 1;
`;

export const NavMenuContainer = styled.div`
  transform: translateX(0%);
  transition: transform 0.5s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (min-width: 768px) {
    text-align: left;
    max-width: min(30rem, 55%);
  }
  @media (min-width: 1200px) {
    max-width: 36rem;
  }
  @media (min-width: 768px) {
    max-width: 32rem;
  }
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const NavMenuPrimary = styled.div`
  @media (min-width: 768px) {
    align-items: flex-start;
  }
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: calc(var(--spacer-x2) * 3);
  width: 100%;
  align-items-: center;
  background: var(--somewhere-navy);
  padding-top: calc(5rem + var(--spacer-x4));
  padding-bottom: var(--spacer-x4);
  min-height: 100%;
  overflow-y: auto;
`;

export const NavMenuClose = styled.div`
  cursor: pointer;
  left: var(--spacer-x4);
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  position: absolute;
  z-index: 10;
  top: 1.5rem;
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  color: var(--somewhere-offwhite);
  padding: 0;
  border: none;
  border-radius: 0;
  background: none;
  outline: none;
`;

export const NavMenuCloseIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1.5rem;
  height: 1.5rem;
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  color: var(--somewhere-offwhite);
  & > span:nth-child(1) {
    transform: rotate(-45deg);
  }
  & > span:nth-child(2) {
    transform: rotate(45deg);
  }
  & > span {
    position: absolute;
    display: block;
    width: 67%;
    height: 1px;
    background: currentColor;
  }
`;

export const NavMenuCloseLabel = styled.div`
  margin-left: 0.25rem;
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  color: var(--somewhere-offwhite);
`;

export const NavMenuPrimaryNav = styled.div`
  @media (min-width: 768px) {
    flex: initial;
    align-items: stretch;
    width: 100%;
    font-size: clamp(32px, 0.4vw + 30.4px, 40px);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: hidden;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;

  & > a {
    position: relative;
    display: block;
    padding-left: var(--spacer-x4);
    padding-right: var(--spacer-x4);
    color: var(--somewhere-offwhite);
    visibility: visible;
    transition: opacity 0.3s ease;
    text-decoration: none;
  }
`;

export const NavMenuFooter = styled.div`
  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: calc(var(--spacer-x2) * 1.5) var(--spacer-x2);
  width: 100%;
  padding-left: var(--spacer-x4);
  padding-right: var(--spacer-x4);

  & > div:not(div:nth-child(5)) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavMenuFooterHeading = styled.div`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: calc(var(--font-size-sm) * 0.75);
  color: var(--somewhere-navy-50);

  & + div {
    margin-top: calc(var(--spacer-x2) * 0.25);
  }
`;

export const NavMenuFooterLinks = styled.div`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: calc(var(--font-size-sm) * 0.75);
  color: var(--somewhere-navy-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  line-height: 2;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
  & > a {
    @media (min-width: 768px) {
      align-items: flex-start;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      color: var(--somewhere-navy-75);
      opacity: 1;
      transition: opacity 0.3s ease;
      text-decoration: none;
      cursor: pointer;
    }
  }

  & > a span {
    display: inline-block;
  }
`;

export const NavMenuFooterSocialLinks = styled.div`
  gap: 0;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
`;

export const NavMenuFooterCenter = styled.div`
  @media (min-width: 768px) {
    align-items: flex-start;
  }
  justify-content: center;
  align-items: center;
  align-self: center;
  & > a {
    font-family: termina, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 11px;
    position: relative;
    display: inline-block;
    line-height: 2;
    cursor: pointer;
    color: var(--somewhere-offwhite);
  }
`;

export const NavMenuSecondary = styled.div`
  position: absolute;
  z-index: 1;
  left: 100%;
  background: var(--somewhere-navy-5);
  padding-left: var(--spacer-x4);
  padding-right: var(--spacer-x4);
  width: min(30rem, 81.8181818182%);
  transition: transform 0.5s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding-top: calc(5rem + var(--spacer-x4));
  padding-bottom: var(--spacer-x4);
  min-height: 100%;
  overflow-y: auto;
`;

export const NavMenuSecondaryNav = styled.div`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacer-x2);
  font-size: 0.75rem;
  transform: translateX(0);
  padding-bottom: var(--spacer-x4);
  min-height: 100%;
  overflow-y: auto;
  & > a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--somewhere-offwhite);
    text-decoration: none;
    cursor: pointer;
  }

  & > a span {
    display: block;
  }

  & > a span:not(:first-child) {
    color: var(--somewhere-navy-25);
  }
`;

export const BookingMenu = styled.div`
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 0s, visibility 0s;
  z-index: 3000;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BookMenuOverlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 28, 34, 0.95);
  opacity: 1;
  transition: opacity 0.8s;
`;
export const BookMenuContainer = styled.div`
  transform: translateX(0%);
  transition: transform 0.5s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (min-width: 768px) {
    padding: calc(5rem + var(--spacer-x4)) var(--spacer-x4) var(--spacer-x4)
      var(--spacer-x4);
  }
  @media (min-width: 1200px) {
    max-width: 36rem;
  }
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  background: var(--somewhere-navy);
`;

export const BookMenuListing = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacer-x2);
`;

export const BookMenuListingItem = styled.div`
  display: flex;
  gap: var(--spacer-x2);
  background: var(--somewhere-offwhite);
  color: var(--somewhere-navy);
`;

export const BookMenuListingImage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacer-x2);
  position: relative;
  width: 40%;
  padding-bottom: 50%;
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
export const BookMenuListingMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  width: 60%;
  padding: var(--spacer-x2);
`;

export const BookMenuListingBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h2 {
    font-size: var(--font-size-lg);
    font-family: "PPFragment-GlareLight", serif;
    font-weight: normal;
    text-transform: uppercase;
    color: var(--bs-heading-color);
  }

  & > div {
    font-size: var(--font-size-sm);
    line-height: 1.75;
  }
`;

export const BookingBtn = styled.a`
  --btn-color: var(--somewhere-navy);
  --btn-bg: transparent;
  --btn-hover-color: var(--somewhere-offwhite);
  --btn-hover-bg: var(--somewhere-navy);
  border: 1px solid var(--btn-color);
  width: 100%;
  padding: 0 var(--spacer-x2);
  position: relative;
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

  &:hover {
    --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
  }
`;


