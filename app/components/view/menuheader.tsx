import {
  MenuHeader,
  MenuHeaderInner,
  HeaderInner,
  HHeading1,
  HHeading2,
  HeaderTextSplit,
  Whitespace,
  MakeABooking
} from "@/app/styles";
import { Logo } from "@/app/icon";
import { Nav } from "./nav";
import { HeroContainer } from "@/app/styles";

export const Menu = () => {
  return (
    <HeroContainer>
      <MenuHeaderInner>
        <HeaderInner>
          <HHeading1>
            <HeaderTextSplit>Ever</HeaderTextSplit>
            <Whitespace> </Whitespace>
            <HeaderTextSplit>CHANGING</HeaderTextSplit>
          </HHeading1>
          <HHeading1>
            <HeaderTextSplit>WORLDS</HeaderTextSplit>
            <Whitespace> </Whitespace>
            <HeaderTextSplit>AWAIT</HeaderTextSplit>
          </HHeading1>
          <HHeading1>
            <HeaderTextSplit>YOU</HeaderTextSplit>
          </HHeading1>
        </HeaderInner>
        <HHeading2>WHICH ONE WILL YOU EXPLORE?</HHeading2>
        <MakeABooking>MAKE A BOOKING</MakeABooking>
      </MenuHeaderInner>
    </HeroContainer>
  );
};
