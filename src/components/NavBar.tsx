import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-green-800 text-white px-4 py-3 shadow-md">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-2xl">🌱</span>
        <span>Plant Cell Explorer</span>
      </Link>
    </nav>
  );
}
