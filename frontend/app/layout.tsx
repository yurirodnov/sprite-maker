// sprite-maker/frontend/app/layout.tsx

import type { Metadata } from "next";
import { EditorContextProvider } from "./_context/EditorContext";
import { Header } from "./_components/header/Header";
import { Footer } from "./_components/footer/Footer";

import "./globals.css";

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
        <EditorContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </EditorContextProvider>
      </body>
    </html>
  );
}
