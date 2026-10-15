import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experiments } from "@/components/Experiments";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { ToolsAndTechnologies } from "@/components/ToolsAndTechnologies";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <SelectedWork />
      <Experiments />
      <ToolsAndTechnologies />
      <About />
      <Contact />
    </main>
  );
}
