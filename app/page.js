import Hero from "@/components/home/hero"
import Landing from "@/components/home/landing";
import Portfolio from "@/components/portfolio";
import Service from "@/components/service";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Landing/>
      <Hero/>
      <Service/>
      <Portfolio/>
      <Contact/>

    </div>
  );
}
