
import { Header } from "./styles";
import { Menu } from "./components/view/menuheader";
import Image from "next/image";
import { Welcome } from "./components/section/welcome";
import { Escape } from "./components/section/escape";
import { About } from "./components/section/about";



export default function Home() {
  return (
    <>
      <Header>
        <Menu />
        <Image
          src="/assets/home-hero.jpg"
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
      </Header>
      <Welcome />
      <Escape />
      <About />
    </>
  );
}
