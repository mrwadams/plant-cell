import Link from "next/link";
import { organelles } from "@/data/organelles";

export default function OrganelleNav({ currentSlug }: { currentSlug: string }) {
  const others = organelles.filter((o) => o.slug !== currentSlug);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Explore Other Parts</h2>
      <div className="flex flex-wrap gap-2">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`/${o.slug}`}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: o.color }}
          >
            <span>{o.emoji}</span>
            <span>{o.name.split(" (")[0]}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
