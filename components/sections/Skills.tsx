import { skills } from "@/data/content";
import Badge from "@/components/ui/Badge";

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        Skills
      </h2>
      <div className="flex flex-col gap-6">
        {groups.map(({ label, items }) => (
          <div key={label}>
            <p className="text-xs font-mono text-zinc-600 mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
