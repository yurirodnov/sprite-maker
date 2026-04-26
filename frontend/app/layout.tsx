// sprite-maker/frontend/app/layout.tsx

import type { Metadata } from "next";
import { Header } from "./_components/header/Header";
import "./globals.css";
import { Footer } from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Sprite maker",
  description: "Draw pixel art sprites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
