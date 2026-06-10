import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        Experience
      </h2>
      <div className="flex flex-col gap-7">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`}>
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
              <span className="text-white font-medium">{job.company}</span>
              <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <span className="text-zinc-400 text-sm">{job.role}</span>
              <span className="text-xs text-zinc-600">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
