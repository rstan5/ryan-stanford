import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experiments } from "@/components/Experiments";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <SelectedWork />
      <Experiments />
      <About />
      <Contact />
    </main>
  );
}
