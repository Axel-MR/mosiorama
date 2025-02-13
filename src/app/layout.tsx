import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import './globals.css';

// Configura la fuente Pixelify Sans
const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Especifica los pesos que necesitas
  variable: '--font-pixelify', // Define una variable CSS
});

// Configura la fuente Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configura la fuente Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosiorama",
  description: "Memorama de Mosios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}