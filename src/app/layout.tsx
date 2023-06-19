import { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alfirman Pahlepi",
    template: "%s · Alfirman Pahlepi",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Alfirman Pahlepi",
    description: "Developer, writer, and creator.",
    url: "https://alfirman.dev",
    siteName: "Alfirman Pahlepi",
    images: [
      {
        url: "https://alfirman.dev/alfirman.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "id-ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Alfirman Pahlepi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body className="bg-gray-900 transition ease">
        <Header />
        <main className="min-w-xs max-w-screen-md flex flex-col justify-center items-center mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
