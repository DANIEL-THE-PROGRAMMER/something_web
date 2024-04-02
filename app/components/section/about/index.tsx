import { Whitespace } from "@/app/styles";
import {
  MediaFill,
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
  RowCol1,
  AboutContanerInnerRow2,
  ConnectBlock,
  ConnectBlockContainer,
  ConnectH2,
  SocialLinks,
  ConnectH6,
} from "./style";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <AboutContaner>
        <AboutContanerInner>
          <AboutContanerInnerRow>
            <AboutContanerInnerColumnOne>
              <H2>About somewhere</H2>
              <H3>
                <p>
                  <span>Explore</span>
                  <Whitespace> </Whitespace>
                  <span>new</span>
                  <Whitespace> </Whitespace>
                  <span>worlds</span>
                  <Whitespace> </Whitespace>
                </p>
                <p>
                  <span>Escape</span>
                  <Whitespace> </Whitespace>
                  <span>reality.</span>
                </p>
                <p>
                  <span>Encounter</span>
                  <Whitespace> </Whitespace>
                  <span>a</span>
                  <Whitespace> </Whitespace>
                  <span>cocktail</span>
                  <Whitespace> </Whitespace>
                  <span>bar</span>
                  <Whitespace> </Whitespace>
                  <span>like</span>
                  <Whitespace> </Whitespace>
                  <span>no</span>
                  <Whitespace> </Whitespace>
                  <span>other.</span>
                </p>
              </H3>
            </AboutContanerInnerColumnOne>
            <AboutContanerInnerColumnTwo>
              <MediaFill>
                <Image
                  src="/assets/Somewhere-about-4.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </MediaFill>
            </AboutContanerInnerColumnTwo>
          </AboutContanerInnerRow>
          <AboutContanerInnerRow2>
            <RowCol1>
              <MediaFill>
                <Image
                  src="/assets/Somewhere-about-5.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </MediaFill>
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
              <Col3MediaFill>
                <Image
                  src="/assets/somewhere-gallery-7.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Col3MediaFill>
            </Col3>
          </AboutContanerInnerRow2>
        </AboutContanerInner>
      </AboutContaner>
      <ConnectBlock>
        <ConnectBlockContainer>
          <Image
            src="/assets/connect2.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
          <ConnectH6>@somewherebynico</ConnectH6>
          <ConnectH2>Connect with us</ConnectH2>
          <SocialLinks></SocialLinks>
        </ConnectBlockContainer>
      </ConnectBlock>
    </>
  );
};
