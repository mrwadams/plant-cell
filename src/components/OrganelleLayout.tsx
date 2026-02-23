import type { Organelle } from "@/data/organelles";
import FunFact from "./FunFact";
import OrganelleNav from "./OrganelleNav";

export default function OrganelleLayout({ organelle }: { organelle: Organelle }) {
  return (
    <div
      style={
        {
          "--organelle-color": organelle.color,
          "--organelle-light": organelle.lightColor,
        } as React.CSSProperties
      }
    >
      {/* Hero banner */}
      <div
        className="py-10 px-4 text-center text-white"
        style={{ backgroundColor: organelle.color }}
      >
        <span className="text-5xl block mb-3 animate-bounce-in">{organelle.emoji}</span>
        <h1 className="text-3xl font-bold animate-fade-in-up">{organelle.name}</h1>
        {organelle.subtitle && (
          <p className="mt-1 text-white/80 text-lg animate-fade-in-up animation-delay-100">
            {organelle.subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <section className="animate-fade-in-up animation-delay-100">
          <h2 className="text-xl font-semibold mb-2" style={{ color: organelle.color }}>
            What does it do?
          </h2>
          <p className="text-gray-700 leading-relaxed">{organelle.description}</p>
        </section>

        <section className="mt-6 animate-fade-in-up animation-delay-200">
          <h2 className="text-xl font-semibold mb-2" style={{ color: organelle.color }}>
            Think of it like...
          </h2>
          <p className="text-gray-700 leading-relaxed">{organelle.analogy}</p>
        </section>

        <div className="animate-fade-in-up animation-delay-300">
          <FunFact fact={organelle.funFact} />
        </div>

        <section className="mt-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-2" style={{ color: organelle.color }}>
            🖨️ In Our Model
          </h2>
          <p className="text-gray-700 leading-relaxed">{organelle.modelNote}</p>
        </section>

        <OrganelleNav currentSlug={organelle.slug} />
      </div>
    </div>
  );
}
