import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      <Hero />
      <hr className="border-zinc-800" />
      <Experience />
      <hr className="border-zinc-800" />
      <Projects />
      <hr className="border-zinc-800" />
      <Skills />
    </main>
  );
}
