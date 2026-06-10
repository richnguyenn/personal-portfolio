import { personal } from "@/data/content";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <p className="text-sm font-mono text-zinc-500 mb-3">hi, i&apos;m</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
        {personal.name}
      </h1>
      <p className="text-lg text-zinc-400 font-mono mb-10">{personal.tagline}</p>
      <div className="flex gap-6 text-sm font-mono">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
        >
          github
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
        >
          linkedin
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
        >
          resume
        </a>
      </div>
    </section>
  );
}
