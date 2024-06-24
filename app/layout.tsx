import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riley Fletcher",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Transition>
          {children}
        </Transition>
      </body>
      
    </html>
  );
}
