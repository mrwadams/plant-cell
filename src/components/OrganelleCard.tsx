import Link from "next/link";
import type { Organelle } from "@/data/organelles";

export default function OrganelleCard({ organelle }: { organelle: Organelle }) {
  return (
    <Link
      href={`/${organelle.slug}`}
      className="group block rounded-xl border border-gray-200 p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{organelle.emoji}</span>
        <h2 className="text-lg font-semibold" style={{ color: organelle.color }}>
          {organelle.name.split(" (")[0]}
        </h2>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
        {organelle.description.split(".")[0]}.
      </p>
      <span
        className="mt-3 inline-block text-sm font-medium transition-colors"
        style={{ color: organelle.color }}
      >
        Learn more →
      </span>
    </Link>
  );
}
