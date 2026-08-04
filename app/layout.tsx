import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sociabletravels.com"),

  title: {
    default: "Sociable Travels",
    template: "%s | Sociable Travels",
  },

  description:
    "Luxury vacations, cruises, group travel, and unforgettable travel experiences planned just for you.",

  keywords: [
    "travel agency",
    "vacation planner",
    "group travel",
    "cruises",
    "all inclusive resorts",
    "family vacations",
    "honeymoons",
    "luxury travel",
    "Sociable Travels",
  ],

  authors: [
    {
      name: "From London to Paris LLC",
    },
  ],

  creator: "From London to Paris LLC",

  publisher: "Sociable Travels",

  openGraph: {
    title: "Sociable Travels",
    description:
      "Luxury vacations, cruises, and unforgettable travel experiences.",

    url: "https://www.sociabletravels.com",

    siteName: "Sociable Travels",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sociable Travels",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sociable Travels",

    description:
      "Luxury vacations, cruises, and unforgettable travel experiences.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}