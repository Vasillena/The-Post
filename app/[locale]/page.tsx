import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import MapIframe from "../components/MapIframe";
import { MenuHome } from "../components/MenuHome";
import { Second } from "../components/Second";
import Slider from "../components/Slider";
import { SwitchLanguage } from "../components/SwitchLanguage";

export default function Home() {
  return (
    <>
      <Hero />
      <SwitchLanguage />
      <Second />
      <About />
      <MenuHome />
      <Slider />
      <Contact />
      <MapIframe />
    </>
  );
}
