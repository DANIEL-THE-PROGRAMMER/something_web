"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavMenuBox,
  NavMenu_Overlay,
  NavMenuContainer,
  NavMenuPrimary,
  NavMenuClose,
  NavMenuCloseIcon,
  NavMenuCloseLabel,
  NavMenuPrimaryNav,
  NavMenuFooter,
  NavMenuFooterHeading,
  NavMenuFooterLinks,
  NavMenuFooterSocialLinks,
  NavMenuFooterCenter,
  NavMenuSecondary,
  NavMenuSecondaryNav,
  BookingMenu,
  BookMenuOverlay,
  BookMenuContainer,
  BookMenuListing,
  BookMenuListingItem,
  BookMenuListingImage,
  BookMenuListingMain,
  BookMenuListingBody,
  BookingBtn,
} from "./style";
import { Dispatch, SetStateAction, useState } from "react";
import { CustomLink } from "../customlink";

export const NavMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState<null | number>(null);

  const Links: { href: string; name: string }[] = [
    {
      href: "worlds",
      name: "Our worlds",
    },
    {
      href: "booking",
      name: "Booking",
    },
    {
      href: "vochers",
      name: "Gift vouchers",
    },
  ];

  return (
    <>
      <NavMenuBox $open={open}>
        <NavMenu_Overlay $open={open}></NavMenu_Overlay>
        <NavMenuContainer $open={open}>
          <NavMenuPrimary>
            <span onClick={() => setOpen(false)}>
              <NavMenuClose>
                <NavMenuCloseIcon>
                  <span></span>
                  <span></span>
                </NavMenuCloseIcon>
                <NavMenuCloseLabel>Close</NavMenuCloseLabel>
              </NavMenuClose>
            </span>
            <div className="pr_ft_container">
              <NavMenuPrimaryNav>
                {Links.map(
                  (link: { href: string; name: string }, index: number) => {
                    return (
                      <a
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                      >
                         <CustomLink
                          name={link.name}
                          href={`/${link.href}`}
                          setOpen={setOpen}
                        />
                      </a>
                    );
                  }
                )}
              </NavMenuPrimaryNav>
              <NavMenuFooter>
                <div>
                  <NavMenuFooterHeading>Contact</NavMenuFooterHeading>
                  <NavMenuFooterLinks>
                    info@somewherebynico.co.uk
                  </NavMenuFooterLinks>
                </div>
                <div>
                  <NavMenuFooterHeading>Find us</NavMenuFooterHeading>
                  <NavMenuFooterLinks></NavMenuFooterLinks>
                </div>
                <div>
                  <NavMenuFooterSocialLinks></NavMenuFooterSocialLinks>
                </div>
                <div>
                  <NavMenuFooterCenter>
                    <a>We{"'"}re hiring</a>
                  </NavMenuFooterCenter>
                </div>
                <div></div>
              </NavMenuFooter>
            </div>
          </NavMenuPrimary>

          <NavMenuSecondary $active={active === 0}>
            <NavMenuSecondaryNav>
              <a>
                <span>land of oz</span>
                <span>glascow</span>
              </a>
              <a>
                <span>next menu (coming soon)</span>
                <span>glascow</span>
              </a>
              <a>
                <span>view all</span>
              </a>
            </NavMenuSecondaryNav>
          </NavMenuSecondary>
          <NavMenuSecondary $active={active === 1}>
            <NavMenuSecondaryNav>
              <a>
                <span>land of oz</span>
                <span>glascow</span>
              </a>
            </NavMenuSecondaryNav>
          </NavMenuSecondary>
        </NavMenuContainer>
      </NavMenuBox>
    </>
  );
};

export const BookMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <BookingMenu $open={open}>
      <BookMenuOverlay $open={open}></BookMenuOverlay>
      <BookMenuContainer $open={open}>
        <span onClick={() => setOpen(false)}>
          <NavMenuClose>
            <NavMenuCloseIcon>
              <span></span>
              <span></span>
            </NavMenuCloseIcon>
            <NavMenuCloseLabel>Close</NavMenuCloseLabel>
          </NavMenuClose>
        </span>
        <BookMenuListing>
          <BookMenuListingItem>
            <BookMenuListingImage>
              <Image
                src="/assets/LOZ_Hero-image.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </BookMenuListingImage>
            <BookMenuListingMain>
              <BookMenuListingBody>
                <h2>land of oz</h2>
                <div>
                  <div>20th March {"-"} 28th April 2024</div>
                  <div>Glasgow</div>
                </div>
              </BookMenuListingBody>
              <BookingBtn>Check Availability</BookingBtn>
            </BookMenuListingMain>
          </BookMenuListingItem>
          <BookMenuListingItem>
            <BookMenuListingImage>
              <Image
                src="/assets/NOSTALGIA_DEF_RGB.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </BookMenuListingImage>
            <BookMenuListingMain>
              <BookMenuListingBody>
                <h2>Next menu</h2>
                <div>
                  <div>30th April {"-"} 9th June 2024</div>
                  <div>Glasgow</div>
                </div>
              </BookMenuListingBody>
              <BookingBtn>Join the waiting list</BookingBtn>
            </BookMenuListingMain>
          </BookMenuListingItem>
        </BookMenuListing>
      </BookMenuContainer>
    </BookingMenu>
  );
};
