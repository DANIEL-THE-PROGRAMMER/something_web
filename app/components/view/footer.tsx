import { NewsLetter } from "../section/newsletter";
import {
  Footer as FooterBox,
  FooterTop,
  FooterBottom,
  FooterBtnSecondary,
  FooterBottomLinks,
  FooterH2,
  FooterLinks,
  FooterTopColOne,
  FooterTopColTwo,
  FoterTopColThree,
  FoterTopColFour,
  FooterButton,
  FooterLogo as FooterbottomLogo,
} from "@/app/styles";
import { FooterLogo } from "@/app/icon";

export const Footer = () => {
  return (
    <>
      <NewsLetter />
      <FooterBox>
        <FooterTop>
          <FooterTopColOne>
            <FooterButton>Make a Booking</FooterButton>
          </FooterTopColOne>
          <FooterTopColTwo>
            <FooterH2>Contact</FooterH2>
            <FooterLinks>
              <a>info@somewherebynico,uk</a>
            </FooterLinks>
            <FooterBtnSecondary>We{"'"}re hiring</FooterBtnSecondary>
          </FooterTopColTwo>
          <FoterTopColThree>
            <FooterH2>GLASGOW</FooterH2>
            <FooterLinks>
              <a>
                <span>{"358 Byres Rd"}</span>
              </a>
            </FooterLinks>
          </FoterTopColThree>
          <FoterTopColFour>
            <FooterH2>GLASGOW</FooterH2>
            <FooterLinks>
              <a>Instagram</a>
              <a>Tiktok</a>
              <a>Facebook</a>
            </FooterLinks>
          </FoterTopColFour>
        </FooterTop>
        <FooterbottomLogo>
          <FooterLogo />
        </FooterbottomLogo>
        <FooterBottom>
          <FooterBottomLinks>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>FAQ</a>
          </FooterBottomLinks>
          <FooterBottomLinks>Site by Form</FooterBottomLinks>
        </FooterBottom>
      </FooterBox>
    </>
  );
};
