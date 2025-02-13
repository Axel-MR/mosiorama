import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans  } from "next/font/google";
import './globals.css';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Especifica los pesos que necesitas
  variable: '--font-pixelify', // Opcional: Define una variable CSS
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
