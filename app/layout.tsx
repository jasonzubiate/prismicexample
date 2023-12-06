import type { Metadata } from "next";
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Prismic CMS Example",
    description: settings.data.meta_description || "Propery of Spinnin Studio",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
