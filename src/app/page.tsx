import { Hero } from "@/components/sections/Hero";
import { Promise } from "@/components/sections/Promise";
import { Audience } from "@/components/sections/Audience";
import { Services } from "@/components/sections/Services";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { Differentiation } from "@/components/sections/Differentiation";
import { About } from "@/components/sections/About";
import { Methode } from "@/components/sections/Methode";
import { References } from "@/components/sections/References";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <Audience />
      <Services />
      <PricingPackages />
      <Differentiation />
      <About />
      <Methode />
      <References />
      <Blog />
      <Contact />
    </>
  );
}
