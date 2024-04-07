import {
  Whitespace,
  Word,
  WordPara,
  WordBox,
  Wordbtn,
  TextMarquee,
  TextMarqueeGroup,
  TextMarqueeItem,
  ThemeListing,
  ThemeListingItem,
  ThemeImage,
  ThemeContent,
  ThemeNowBooking,
  ThemeingIcon,
  Themeingh2,
  ThemeingDate,
  ThemeingH3,
  ThemeingExploreButton,
  ConnectWithus,
  ConnectWithUsInner,
  ConnectWithupDiv,
  ConnectH3,
  ConnectSociallinks,
  WordText,
} from "@/app/styles";
import Image from "next/image";

export const Welcome = () => {
  return (
    <div>
      <WordBox>
        <WordPara>
          <WordText index={0}>Welcome</WordText>
          <Whitespace> </Whitespace>
          <WordText index={0}>to</WordText>
          <Whitespace> </Whitespace>
          <WordText index={0}>Somewhere.</WordText>
        </WordPara>
        <WordPara>
          <WordText index={1}>A</WordText>
          <Whitespace> </Whitespace>
          <WordText index={1}>Cocktail</WordText>
          <Whitespace> </Whitespace>
          <WordText index={1}>bar</WordText>
          <Whitespace> </Whitespace>
          <WordText index={1}>and</WordText>
          <Whitespace> </Whitespace>
          <WordText index={1}>experience.</WordText>
        </WordPara>
        <WordPara>
          <WordText index={2}>A</WordText>
          <Whitespace> </Whitespace>
          <WordText index={2}>portal</WordText>
          <Whitespace> </Whitespace>
          <WordText index={2}>to</WordText>
          <Whitespace> </Whitespace>
          <WordText index={2}>the</WordText>
          <Whitespace> </Whitespace>
          <WordText index={2}>extraordinary.</WordText>
        </WordPara>
        <Wordbtn>Book Now</Wordbtn>
      </WordBox>
      <TextMarquee>
        <TextMarqueeGroup>
          <TextMarqueeItem>Explore our worlds</TextMarqueeItem>
        </TextMarqueeGroup>
        <TextMarqueeGroup>
          <TextMarqueeItem>Explore our worlds</TextMarqueeItem>
        </TextMarqueeGroup>
        <TextMarqueeGroup>
          <TextMarqueeItem>Explore our worlds</TextMarqueeItem>
        </TextMarqueeGroup>
      </TextMarquee>
      <ThemeListing>
        <ThemeListingItem>
          <ThemeImage>
            <Image
              src="/assets/LOZ_Hero-image.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </ThemeImage>
          <ThemeContent>
            <ThemeNowBooking>New Booking</ThemeNowBooking>
            <ThemeingIcon>
              <Image
                src="/assets/landofoz-icon.svg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </ThemeingIcon>
            <Themeingh2>Land of oz</Themeingh2>
            <ThemeingDate>
              <div>GLASGOW</div>
              <div>20TH MARCH {"-"} 28TH APRIL 2024</div>
            </ThemeingDate>
            <ThemeingH3>
              “Click your heels, open your eyes and find yourself in the
              technicolour land of Oz—a dreamworld of magic, mystery and
              adventure.”
            </ThemeingH3>
            <ThemeingExploreButton>
              <span>Explore</span>
            </ThemeingExploreButton>
          </ThemeContent>
        </ThemeListingItem>
        <ThemeListingItem $bgColor="#f3bdbd">
          <ThemeContent>
            <ThemeNowBooking>coming soon</ThemeNowBooking>
            <ThemeingIcon>
              <Image
                src="/assets/nostalgia-icon-dark.svg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </ThemeingIcon>
            <Themeingh2>Next Menu</Themeingh2>
            <ThemeingDate>
              <div>GLASGOW</div>
              <div>1TH MARCH {"-"} 9TH June 2024</div>
            </ThemeingDate>
            <ThemeingH3>
              “Click your heels, open your eyes and find yourself in the
              technicolour land of Oz—a dreamworld of magic, mystery and
              adventure.”
            </ThemeingH3>
            <ThemeingExploreButton>
              <span>Explore</span>
            </ThemeingExploreButton>
          </ThemeContent>
          <ThemeImage>
            <Image
              src="/assets/NOSTALGIA_DEF_RGB.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </ThemeImage>
        </ThemeListingItem>
      </ThemeListing>
      <ConnectWithus>
        <ConnectWithUsInner>
          <ConnectWithupDiv>
            <ConnectH3>Connect</ConnectH3>
            <ConnectSociallinks></ConnectSociallinks>
          </ConnectWithupDiv>
        </ConnectWithUsInner>
      </ConnectWithus>
    </div>
  );
};
