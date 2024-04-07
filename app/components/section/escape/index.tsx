import {
  EscapeButton,
  EscapeContainerOuter,
  Escapeh2,
  HomeEscapeHeading,
  EscapeParallaxImage
} from "./styles";
import Image from "next/image"
import { StaggeredWrapper } from "../../wrapper";


export const Escape = () => {
    return (
      <div className="homeEscape">
        <EscapeParallaxImage>
          <Image
            src="/assets/escape-hero-image.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vww"
          />
          <HomeEscapeHeading>Escape</HomeEscapeHeading>
          <StaggeredWrapper>
            <EscapeButton>Treat someone</EscapeButton>
          </StaggeredWrapper>
        </EscapeParallaxImage>
      </div>
    );
}