import {
  MenuHeader,
  MenuBtn,
  BookBtn,
  MenuHeaderInner,
  HeaderInner,
  HHeading1,
  HHeading2,
  HeaderTextSplit,
  HeadingSpan,
  Whitespace,
  MakeABooking
} from "@/app/styles";
import { Logo } from "@/app/icon";

export const Menu = () => {
  return (
    <MenuHeader>
      <div className="menuflex">
        <MenuBtn>Menu</MenuBtn>
      </div>
      <Logo />
      <div className="menuflex2">
        <BookBtn>
          <div>Make a booking</div>
        </BookBtn>
      </div>
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
    </MenuHeader>
  );
};
