import { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
