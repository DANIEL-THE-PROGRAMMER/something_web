import { Header } from "../styles";
import Image from "next/image";
import {
  HeroContainer,
  H1,
  HeroMain,
} from "../worlds/styles";

import { HeaderTextSplit, Whitespace } from "../styles";

export default function Vouchers (){
    return (
      <Header>
        <Image
          src="/assets/escape-hero-image.jpg"
          width={0}
          height={0}
          alt="home hero"
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          sizes="100vw"
        />
        <HeroContainer>
          <HeroMain>
            <H1>
              <HeaderTextSplit>Gift</HeaderTextSplit>
              <Whitespace> </Whitespace>
              <HeaderTextSplit>Vouchers</HeaderTextSplit>
            </H1>
          </HeroMain>
        </HeroContainer>
      </Header>
    );
}