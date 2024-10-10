import type { Metadata } from "next";

import { satoshi } from "@/assets/fonts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Devfik",
  description: "Shape The Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} overflow-x-hidden tracking-wide antialiased dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
