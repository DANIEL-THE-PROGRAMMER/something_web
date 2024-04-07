
import { Header } from "./styles";
import { Menu } from "./components/view/menuheader";
import Image from "next/image";
import { Welcome } from "./components/section/welcome";
import { Escape } from "./components/section/escape";
import { About } from "./components/section/about";
import { HeroImage } from "./components/heroimage";



export default function Home() {
  return (
    <>
      <Header>
        <Menu />
        <HeroImage image="/assets/home-hero.jpg" />
      </Header>
      <Welcome />
      <Escape />
      <About />
    </>
  );
}
