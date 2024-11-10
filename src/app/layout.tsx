import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";
import { OpenPanelComponent } from "@openpanel/nextjs";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { satoshi } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "devfik", "team", "debitcredit", "Devfik"],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
        <QueryProvider>
          <OpenPanelComponent
            // The ! operator asserts that this environment variable will definitely have a value
            // and won't be undefined at runtime. We're confident about this because this env var
            // is required for OpenPanel to work and is set in our .env file
            clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
            trackScreenViews={true}
            trackAttributes={true}
            trackOutgoingLinks={true}
          />
          <NextTopLoader color="#F97316" easing="ease" height={2} showSpinner={false} />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
