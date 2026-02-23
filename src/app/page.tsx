import Image from "next/image";
import { organelles } from "@/data/organelles";
import OrganelleCard from "@/components/OrganelleCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-green-800 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-3 animate-fade-in-up">🌿 Plant Cell Explorer</h1>
        <p className="text-lg text-green-100 max-w-xl mx-auto animate-fade-in-up animation-delay-100">
          Scan an NFC tag on the 3D model to learn about each part of a plant cell!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Model photo */}
        <div className="mb-8 animate-fade-in-up animation-delay-200">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            <Image
              src="/images/model-photo.jpg"
              alt="3D printed plant cell model"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Our 3D printed plant cell model
          </p>
        </div>

        {/* Organelle card grid */}
        <h2 className="text-2xl font-bold mb-4">Parts of the Cell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {organelles.map((organelle) => (
            <OrganelleCard key={organelle.slug} organelle={organelle} />
          ))}
        </div>

        {/* Cytoplasm callout */}
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h3 className="text-lg font-semibold text-amber-800">What about the Cytoplasm?</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The cytoplasm is the jelly-like fluid that fills the cell and surrounds all the organelles.
            It doesn&apos;t have its own NFC tag because it&apos;s not a separate part you can pick up —
            it&apos;s everywhere inside the cell! Think of it like the water in a swimming pool, with all
            the organelles floating in it.
          </p>
        </div>
      </div>
    </div>
  );
}
