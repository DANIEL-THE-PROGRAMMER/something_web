import Image from "next/image";
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

export const NavMenu = () => {
  return (
    <>
      <NavMenuBox>
        <NavMenu_Overlay></NavMenu_Overlay>
        <NavMenuContainer>
          <NavMenuPrimary>
            <NavMenuClose>
              <NavMenuCloseIcon>
                <span></span>
                <span></span>
              </NavMenuCloseIcon>
              <NavMenuCloseLabel>Close</NavMenuCloseLabel>
            </NavMenuClose>
            <NavMenuPrimaryNav>
              <a>our worlds</a>
              <a>Booking</a>
              <a>Gift Vouchers</a>
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
          </NavMenuPrimary>
          <NavMenuSecondary>
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
          <NavMenuSecondary>
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

export const BookMenu = () => {
  return (
    <BookingMenu>
      <BookMenuOverlay></BookMenuOverlay>
      <BookMenuContainer>
        <NavMenuClose>
          <NavMenuCloseIcon>
            <span></span>
            <span></span>
          </NavMenuCloseIcon>
          <NavMenuCloseLabel>Close</NavMenuCloseLabel>
        </NavMenuClose>
        <BookMenuListing>
          <BookMenuListingItem>
            <BookMenuListingImage>
              <Image src="/assets/LOZ_Hero-image.jpg" alt="" width={0} height={0} sizes="100vw" />
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
              <Image src="/assets/NOSTALGIA_DEF_RGB.jpg" alt="" width={0} height={0} sizes="100vw" />
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
}