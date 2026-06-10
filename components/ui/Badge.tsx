import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700",
        className
      )}
    >
      {label}
    </span>
  );
}
