import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { satoshi } from "@/lib/fonts";
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
      <body
        className={`${satoshi.className} overflow-x-hidden tracking-wide antialiased dark flex flex-col min-h-screen`}>
        <NextTopLoader color="#F97316" easing="ease" height={2} showSpinner={false} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
