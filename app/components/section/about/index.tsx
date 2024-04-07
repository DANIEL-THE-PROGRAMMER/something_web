import { Whitespace } from "@/app/styles";
import {
  H3,
  H2,
  AboutContanerInnerColumnTwo,
  AboutContanerInnerColumnOne,
  AboutContanerInnerRow,
  AboutContanerInner,
  AboutContaner,
  Col2,
  Col3,
  RichText,
  Col3MediaFill,
  MediaFill,
  RowCol1,
  AboutContanerInnerRow2,
  ConnectBlock,
  ConnectBlockContainer,
  ConnectH2,
  SocialLinks,
  ConnectH6,
  Word,
  ParallaxImageMedia,
  ParallaxImageMediaCol,
  ParallaxImageConnectBlock,
} from "./style";
import Image from "next/image";
import { StaggeredWrapper } from "../../wrapper";

export const About = () => {
  return (
    <>
      <AboutContaner>
        <AboutContanerInner>
          <AboutContanerInnerRow>
            <AboutContanerInnerColumnOne>
              <StaggeredWrapper>
                <H2>About somewhere</H2>
              </StaggeredWrapper>
              <H3>
                <p>
                  <Word index="0">
                    <span>Explore</span>
                  </Word>
                  <Whitespace> </Whitespace>
                  <Word index="0">new</Word>
                  <Whitespace> </Whitespace>
                  <Word index="0">worlds</Word>
                  <Whitespace> </Whitespace>
                </p>
                <p>
                  <Word index="1">Escape</Word>
                  <Whitespace> </Whitespace>
                  <Word index="1">reality.</Word>
                </p>
                <p>
                  <Word index="2">Encounter</Word>
                  <Whitespace> </Whitespace>
                  <Word index="2">a</Word>
                  <Whitespace> </Whitespace>
                  <Word index="2">cocktail</Word>
                  <Whitespace> </Whitespace>
                  <Word index="2">bar</Word>
                  <Whitespace> </Whitespace>
                  <Word index="3">like</Word>
                  <Whitespace> </Whitespace>
                  <Word index="3">no</Word>
                  <Whitespace> </Whitespace>
                  <Word index="3">other.</Word>
                </p>
              </H3>
            </AboutContanerInnerColumnOne>
            <AboutContanerInnerColumnTwo>
              <ParallaxImageMedia>
                <Image
                  src="/assets/Somewhere-about-4.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </ParallaxImageMedia>
            </AboutContanerInnerColumnTwo>
          </AboutContanerInnerRow>
          <AboutContanerInnerRow2>
            <RowCol1>
              <ParallaxImageMedia>
                <Image
                  src="/assets/Somewhere-about-5.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </ParallaxImageMedia>
            </RowCol1>
            <Col2>
              <RichText>
                <p>
                  Somewhere is a conceptual cocktail bar by the award-winning
                  team behind Six by Nico. Every six weeks, we open the portal
                  to a new world—creating unforgettable experiences inspired by
                  dreams, stories, memories and myths.
                </p>
                <p>
                  You encounter each world through a six-course tasting menu:
                  Curious concoctions arrive at your table with experimental
                  food pairings, a splash of theatre and all manner of
                  exhilarating twists. These marvellous worlds are open to all
                  who seek to explore them, which is why we create non-alcoholic
                  versions of each menu, with zero compromise on flavour and
                  craft. Our mixologists, chefs and storytellers pore over the
                  tiniest details — infusing creative magic into every sip,
                  bite, sound and sight, to bring these fantasy realms to life.
                </p>
              </RichText>
            </Col2>
            <Col3>
              <ParallaxImageMediaCol>
                <Image
                  src="/assets/somewhere-gallery-7.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </ParallaxImageMediaCol>
            </Col3>
          </AboutContanerInnerRow2>
        </AboutContanerInner>
      </AboutContaner>
      <ConnectBlock>
        <ParallaxImageConnectBlock>
          <Image
            src="/assets/connect2.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
          <StaggeredWrapper>
            <ConnectH6>@somewherebynico</ConnectH6>
          </StaggeredWrapper>
          <StaggeredWrapper>
            <ConnectH2>Connect with us</ConnectH2>
          </StaggeredWrapper>

          <SocialLinks></SocialLinks>
        </ParallaxImageConnectBlock>
      </ConnectBlock>
    </>
  );
};
