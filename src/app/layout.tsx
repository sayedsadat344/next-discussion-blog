import type { Metadata } from "next";

import "./globals.css";
import Providers from './providers';
import Navbar from "@/components/header";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";





export const metadata: Metadata = {
  title: "Disussion Forum",
  description: "Next App for discussion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-800 ">

        <Providers>
          <Header />
        </Providers>
        <main className="container px-4 mx-auto max-w-8xl">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
