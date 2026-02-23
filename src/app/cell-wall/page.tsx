import type { Metadata } from "next";
import OrganelleLayout from "@/components/OrganelleLayout";
import { getOrganelleBySlug } from "@/data/organelles";

const organelle = getOrganelleBySlug("cell-wall")!;

export const metadata: Metadata = { title: `${organelle.name} | Plant Cell Explorer` };

export default function Page() {
  return <OrganelleLayout organelle={organelle} />;
}
