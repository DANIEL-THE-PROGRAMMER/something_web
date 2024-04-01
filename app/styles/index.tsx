"use client";

import { styled } from "styled-components";

export const MenuHeader = styled.div`
  position: absolute;
  z-index: 500;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem var(--spacer-x4);
  justify-content: space-between;
`;

export const MenuBtn = styled.div`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  color: var(--somewhere-offwhite);
`;

export const Header = styled.div`
  position: relative;
  z-index: 2;
  min-height: 100svh;
`;

export const BookBtn = styled.button`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  position: relative;
  display: inline-block;
  line-height: 2;
  color: var(--somewhere-offwhite);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    opacity: 0.5;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const MenuHeaderInner = styled.div`
  padding-top: 5rem;
  min-height: 100svh;
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top:220px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const HHeading1 = styled.h1`
  max-width: 10em;
  width: 100%;
  font-size: var(--font-size-3xl);
  line-height: 1.1;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  --word-center: calc((var(--word-total) - 1) / 2);
  --char-center: calc((var(--char-total) - 1) / 2);
  --line-center: calc((var(--line-total) - 1) / 2);
  color: var(--somewhere-offwhite);
  text-align: center;
  
`;

export const HHeading2 = styled.h2`
  margin-top: calc(var(--spacer-x2) * 2);
  font-size: var(--font-size-sm);
  line-height: 1.75;
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: center;
  color: var(--somewhere-offwhite);
`;

export const HeadingSpan = styled.span``;
export const Whitespace = styled.span`
  font-size: var(--font-size-3xl);
`;

export const HeaderTextSplit = (props: any) => {
  return (
    <span>
      {props.children.split("").map((text: string, index: number) => {
        return <HeadingSpan key={index}>{text}</HeadingSpan>;
      })}
    </span>
  );
};

export const MakeABooking = styled.button`
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
  margin-top: calc(var(--spacer-x2) * 1.5);
`;


export const WordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  padding-bottom: calc(var(--spacer-x3) * 3);
  padding-top: calc(var(--spacer-x4) * 4);
`;

export const WordPara = styled.p`
  text-align:center;
  line-height:1.1px;
  overflow:hidden;
`

export const Wordbtn = styled.button`
  margin-top: var(--font-size-2xl);
  --btn-color: var(--somewhere-navy);
  --btn-bg: transparent;
  --btn-hover-color: var(--somewhere-offwhite);
  --btn-hover-bg: var(--somewhere-navy);
  border: 1px solid var(--btn-color);
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
`; 

export const Word = styled.span`
  --word-percent: calc(var(--word-index) / var(--word-total));
  --line-percent: calc(var(--line-index) / var(--line-total));
  display: inline-block;
  font-size: var(--font-size-2xl);
  line-height: 1.1;
  font-family: ivypresto-display, serif;
  font-weight: 100;
  font-style: normal;
`;