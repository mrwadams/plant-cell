export interface Organelle {
  slug: string;
  name: string;
  subtitle?: string;
  emoji: string;
  color: string;
  lightColor: string;
  description: string;
  analogy: string;
  funFact: string;
  modelNote: string;
}

export const organelles: Organelle[] = [
  {
    slug: "cell-wall",
    name: "Cell Wall",
    emoji: "🧱",
    color: "#2d6a4f",
    lightColor: "#b7e4c7",
    description:
      "The cell wall is a tough, rigid layer on the outside of the cell. It gives the plant cell its shape and protects it, like a suit of armour. It's made of a material called cellulose.",
    analogy:
      "Think of it like the brick walls of a building. They keep the structure standing tall and strong, no matter what the weather does outside.",
    funFact:
      "The cell wall is so strong that even when a plant cell dies, the wall stays behind. That's why wood is so hard — it's made of millions of old cell walls!",
    modelNote:
      "In my 3D model, the cell wall is the dark green outer layer that wraps around the whole cell.",
  },
  {
    slug: "cell-membrane",
    name: "Cell Membrane (Plasma Membrane)",
    emoji: "🫧",
    color: "#f4a261",
    lightColor: "#fde8cd",
    description:
      "The cell membrane is a thin, flexible skin just inside the cell wall. It controls what goes in and out of the cell — like a security gate. Only the right things are allowed through!",
    analogy:
      "Think of it like the doors and windows of a house. They let fresh air and people in, but keep out rain, bugs, and burglars.",
    funFact:
      "The cell membrane is so thin you'd need to stack about 10,000 of them to be as thick as a single sheet of paper!",
    modelNote:
      "In my 3D model, the cell membrane is the golden-yellow layer sitting just inside the cell wall.",
  },
  {
    slug: "nucleus",
    name: "Nucleus",
    emoji: "🧠",
    color: "#7b2cbf",
    lightColor: "#e0b0ff",
    description:
      "The nucleus is the control centre of the cell. It contains DNA — the instructions that tell the cell what to do, when to grow, and how to work. Every cell needs one to function properly.",
    analogy:
      "Think of it like the head teacher's office in a school. All the important decisions and instructions come from here!",
    funFact:
      "Your DNA is about 2 metres long when stretched out, but it's coiled up so tightly that it fits inside a nucleus that's smaller than a grain of sand!",
    modelNote:
      "In my 3D model, the nucleus is the large purple sphere near the centre of the cell.",
  },
  {
    slug: "vacuole",
    name: "Vacuole",
    emoji: "💧",
    color: "#3a86ff",
    lightColor: "#bbd5ff",
    description:
      "The vacuole is a large, fluid-filled space inside the cell. It stores water, nutrients, and waste. In plant cells, it's usually really big — it can take up most of the space inside the cell!",
    analogy:
      "Think of it like a big storage tank or water tower. It keeps important supplies ready and helps the cell stay plump and firm.",
    funFact:
      "When a plant wilts, it's because the vacuoles have lost water and shrunk. Give it a drink and they fill back up, making the plant stand tall again!",
    modelNote:
      "In my 3D model, the vacuole is the large blue piece in the centre. It's the biggest organelle in there!",
  },
  {
    slug: "chloroplast",
    name: "Chloroplast",
    emoji: "☀️",
    color: "#40916c",
    lightColor: "#b7e4c7",
    description:
      "Chloroplasts are where photosynthesis happens — the amazing process that turns sunlight, water, and carbon dioxide into food (glucose) and oxygen. They contain a green pigment called chlorophyll, which is why plants are green!",
    analogy:
      "Think of it like a tiny solar panel and kitchen combined. It catches sunlight and uses it to cook up food for the plant.",
    funFact:
      "Chloroplasts actually used to be separate tiny organisms billions of years ago! They were swallowed by larger cells, and instead of being digested, they teamed up and have worked together ever since.",
    modelNote:
      "In my 3D model, the chloroplasts are the small forest-green oval shapes dotted around the cell.",
  },
  {
    slug: "mitochondria",
    name: "Mitochondria",
    emoji: "⚡",
    color: "#c9184a",
    lightColor: "#ffb3c1",
    description:
      "Mitochondria are the powerhouses of the cell! They take the food (glucose) made by chloroplasts and break it down to release energy. This process is called respiration.",
    analogy:
      "Think of it like a power station. It takes fuel and turns it into electricity (energy) that the whole cell can use to do its jobs.",
    funFact:
      "Just like chloroplasts, mitochondria were once free-living organisms that teamed up with larger cells. They even have their own DNA, separate from the nucleus!",
    modelNote:
      "In my 3D model, the mitochondria are the small red-purple bean-shaped pieces.",
  },
  {
    slug: "endoplasmic-reticulum",
    name: "Endoplasmic Reticulum",
    subtitle: "(ER for short!)",
    emoji: "🛤️",
    color: "#e9c46a",
    lightColor: "#fef3d0",
    description:
      "The endoplasmic reticulum (ER) is a network of folded membranes that acts like a transport system inside the cell. It helps make and move proteins and other important molecules around.",
    analogy:
      "Think of it like the corridors and conveyor belts in a factory. Materials get made and then shipped to where they're needed.",
    funFact:
      "If you unfolded all the ER from a single cell and laid it flat, it would cover an area much bigger than the cell itself!",
    modelNote:
      "In my 3D model, the ER is the yellow wavy, folded piece near the nucleus.",
  },
  {
    slug: "golgi-body",
    name: "Golgi Body",
    subtitle: "(also called the Golgi Apparatus)",
    emoji: "📦",
    color: "#48cae4",
    lightColor: "#caf0f8",
    description:
      "The Golgi body is the cell's packaging and sorting centre. It takes proteins made by the ER, packages them up neatly, and sends them to the right place — either inside or outside the cell.",
    analogy:
      "Think of it like a post office. Parcels come in, get sorted and labelled, and then are delivered to the right address.",
    funFact:
      "The Golgi body is named after Camillo Golgi, an Italian scientist who discovered it in 1898. He won the Nobel Prize partly because of this discovery!",
    modelNote:
      "In my 3D model, the Golgi body is the light-blue stacked, pancake-like piece.",
  },
  {
    slug: "ribosome",
    name: "Ribosome",
    emoji: "🔩",
    color: "#e63946",
    lightColor: "#ffc8c8",
    description:
      "Ribosomes are tiny but super important! They read the instructions from the DNA (sent as a messenger molecule) and use them to build proteins. Proteins are needed for almost everything in the cell.",
    analogy:
      "Think of it like a 3D printer. It reads a digital blueprint and builds an object from raw materials, layer by layer.",
    funFact:
      "A single cell can have millions of ribosomes! They're some of the smallest parts inside a cell, but without them, nothing would get built.",
    modelNote:
      "In my 3D model, the ribosomes are the tiny red dots scattered around the cell and attached to the ER.",
  },
];

export function getOrganelleBySlug(slug: string): Organelle | undefined {
  return organelles.find((o) => o.slug === slug);
}
