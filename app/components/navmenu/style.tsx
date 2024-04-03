'use client'

import styled from "styled-components"

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
  opacity:1;
`;


export const NavMenuContainer = styled.div`
  transform: translateX(0%);
  transition: transform 0.5s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  max-width: min(33rem, 55%);
  @media (min-width: 768px) {
    text-align: left;
    max-width: min(30rem, 55%);
  }
`;