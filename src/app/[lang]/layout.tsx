import type { Metadata } from "next";
import { Geist, Geist_Mono, Libertinus_Serif } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "../structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Libertinus_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://submitlyapp.github.io"),

  title: {
    default: "Submitly",
    template: "%s | Submitly",
  },

  applicationName: "Submitly",

  description:
    "Submitly - Homework submission macro. Less time submitting, more time on what matters.",

  icons: {
    icon: [
      {
        url: "/favicon-48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    siteName: "Submitly",
    title: "Submitly",
    description:
      "Less time submitting, more time on what matters.",
    url: "https://submitlyapp.github.io",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = (await params).lang
  
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <title>Submitly</title>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
