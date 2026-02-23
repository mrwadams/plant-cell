import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Plant Cell Explorer",
  description:
    "Explore the parts of a plant cell! Scan an NFC tag on the 3D model to learn about each organelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased bg-white text-gray-900`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
