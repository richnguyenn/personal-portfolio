import { projects } from "@/data/content";
import Badge from "@/components/ui/Badge";

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        Projects
      </h2>
      <div className="flex flex-col gap-7">
        {projects.map((project) => (
          <div key={project.name}>
            <p className="text-white font-medium mb-3">{project.name}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} label={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
