import Image from "next/image";
import Hero from "@/components/home/hero"
import Portfolio from "@/components/portfolio";
import Service from "@/components/service";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Portfolio/>
      <Service/>
      <Contact/>

    </div>
  );
}
