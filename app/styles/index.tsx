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


export const TextMarquee = styled.div`
  --marquee-duration: 20s;
  font-family: "PPFragment-GlareLight", serif;
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  overflow: hidden;
  font-size: calc(var(--spacer-x4) * 4);
  text-transform: uppercase;
  line-height: 1;
  color: #d2d2cf;
`;

export const TextMarqueeGroup = styled.div`
  display: flex;
  flex-shrink: 0;
  animation: marqueeScroll var(--marquee-duration) linear infinite;

  &::after {
    content: "•";
    padding: 0 0.1em;
  }

  @keyframes marqueeScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const TextMarqueeItem = styled.div`
  flex-shrink: 0;
`;

export const ThemeListing = styled.div`
  margin-top: var(--spacer-x4);

  @media (min-width: 992px) {
    padding: 0 var(--spacer-x6);
  }
`;

export const ThemeListingItem = styled.div<{ $bgColor?: string }>`
  display: flex;
  max-width: 2200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.$bgColor || "var(--somewhere-purple)"};
  color: ${props => props.$bgColor ? "var(--somewhere-navy)" : "var(--somewhere-offwhite)"};
  @media (min-width: 992px) .themeListings__item {
    flex-direction: row;
  }

  &::before {
    opacity: ${(props) => (props.$bgColor ? "0.23" : "0.5")};
  }
`;

export const ThemeImage = styled.div`
  width: 100%;
  min-height: 50vmax;
  position: relative;
  overflow:hidden;
  @media (min-width: 992px) {
    width: 50%;
    min-height: min((50vw - var(--spacer-x6)) * 1.2, 90vh);
  }

  & > img {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    height: 125%;
  }
`;

export const ThemeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacer-x2);
  padding: calc(var(--spacer-x2) * 3) var(--spacer-x4);
  text-align: center;
  @media (min-width: 992px) {
    width: 50%;
    min-height: min((50vw - var(--spacer-x6)) * 1.2, 90vh);
  }
`;

export const ThemeNowBooking = styled.div`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.625rem;
  text-align: center;
`;

export const ThemeingIcon = styled.div`
  display: inline-block;
  height: calc(var(--spacer-x2) * 2.5);
  position:relative;

  & > img {
    display: block;
    max-width: 100%;
    width: auto;
    height: 100%;
    vertical-align: middle;
  }
`;

export const Themeingh2 = styled.h2`
  font-size: var(--font-size-2xl);
  line-height: 1.1;
  text-transform:uppercase;
  margin-top: var(--spacer-x2);
  @media (min-width: 1200px) h2 {
    font-size: 2rem;
  }
`;

export const ThemeingDate = styled.div`
  font-size: var(--font-size-sm);
  line-height: 1.75;
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const ThemeingH3 = styled.h3`
  font-family: ivypresto-display, serif;
  font-weight: 100;
  font-style: normal;
  line-height: 1.2;
  color: var(--bs-heading-color);
  max-width: 16em;
`;

export const ThemeingExploreButton = styled.a`
  --btn-hover-color: var(--somewhere-navy);
  --btn-hover-bg: var(--somewhere-offwhite);
  margin-top: calc(var(--spacer-x2) * 0.5);
  --btn-color: var(--somewhere-offwhite);
  --btn-bg: var(--somewhere-gold);
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

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: calc(100% + 1px);
    left: 50%;
    width: 150%;
    height: 200%;
    border-radius: 50%;
    background: var(--btn-hover-bg);
    transform: translateX(-50%) scale(1);
    transition: border-radius 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;



export const ConnectWithus = styled.div`
  overflow: hidden;
  padding-bottom: calc(var(--spacer-x3) * 3);
  padding-top: calc(var(--spacer-x4) * 4);
`;

export const ConnectWithUsInner = styled.div`
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  text-align: center;
`;

export const ConnectWithupDiv = styled.div`
  padding-left: var(--spacer-x6);
  padding-right: var(--spacer-x6);
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  align-items: center;
  gap: 0.75rem 1rem;
`;

export const ConnectH3 = styled.h3`
  font-family: termina, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.625rem;
  text-align:center;
`;


export const ConnectSociallinks = styled.div`
  margin-top: var(--font-size-sm);
  justify-content: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;
`;


