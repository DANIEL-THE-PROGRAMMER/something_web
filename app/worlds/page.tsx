
import {
  Header,
  WordBox,
  WordPara,
  Word,
  HeaderTextSplit,
  Whitespace,
  Wordbtn,
  ConnectWithus,
  ConnectWithUsInner,
  ConnectWithupDiv,
  ConnectH3,
  ConnectSociallinks,
} from "@/app/styles";
import Image from "next/image";
import { HeroContainer, HeroMain, H1 } from "./styles";
import { WordListingContainer, WordListingItem, WordListing } from "./styles";
import { Gallery } from "../components/section/gallery";
import { HeroImage } from "../components/heroimage";


export default function Worlds ()  {
  return (
    <>
      <Header>
        <HeroImage image="/assets/our-worlds-hero2jpg.jpg" />
        <HeroContainer>
          <HeroMain>
            <H1>
              <HeaderTextSplit>Our</HeaderTextSplit>
              <Whitespace> </Whitespace>
              <HeaderTextSplit>WORLDS</HeaderTextSplit>
            </H1>
          </HeroMain>
        </HeroContainer>
      </Header>
      <WordListingContainer>
        <WordListing>
          <WordListingItem>
            <Image
              src="/assets/LOZ_Hero-image.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </WordListingItem>
          <WordListingItem>
            <Image
              src="/assets/NOSTALGIA_DEF_RGB.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </WordListingItem>
        </WordListing>
      </WordListingContainer>
      <WordBox>
        <WordPara>
          <Word>Welcome</Word>
          <Whitespace> </Whitespace>
          <Word>to</Word>
          <Whitespace> </Whitespace>
          <Word>a</Word>
          <Whitespace> </Whitespace>
          <Word>realm</Word>
          <Whitespace> </Whitespace>
          <Word>of</Word>
          <Whitespace> </Whitespace>
          <Word>limitless</Word>
        </WordPara>
        <WordPara>
          <Word>possibilities,</Word>
          <Whitespace> </Whitespace>
          <Word>Where</Word>
          <Whitespace> </Whitespace>
          <Word>every</Word>
          <Whitespace> </Whitespace>
          <Word>sip</Word>
          <Whitespace> </Whitespace>
          <Word>is</Word>
          <Whitespace> </Whitespace>
          <Word>a</Word>
          <Whitespace> </Whitespace>
          <Word>journey</Word>
        </WordPara>
        <WordPara>
          <Word>and</Word>
          <Whitespace> </Whitespace>
          <Word>every</Word>
          <Whitespace> </Whitespace>
          <Word>glass</Word>
          <Whitespace> </Whitespace>
          <Word>a</Word>
          <Whitespace> </Whitespace>
          <Word>portal</Word>
          <Whitespace> </Whitespace>
          <Word>to</Word>
          <Whitespace> </Whitespace>
          <Word>the</Word>
        </WordPara>
        <WordPara>
          <Word>extraordinary</Word>
        </WordPara>
        <Wordbtn>Sign up for first access</Wordbtn>
      </WordBox>
      <ConnectWithus>
        <ConnectWithUsInner>
          <ConnectWithupDiv>
            <ConnectH3>Connect</ConnectH3>
            <ConnectSociallinks></ConnectSociallinks>
          </ConnectWithupDiv>
        </ConnectWithUsInner>
      </ConnectWithus>
      <Gallery />
    </>
  );
};
