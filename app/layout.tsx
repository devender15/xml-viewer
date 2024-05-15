import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/ui/navbar";
import { StateProvider } from "@/contexts/state-context";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "XML Viewer",
  description: "View XML files in a more readable format",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        <StateProvider>
          {children}
          <Toaster />
        </StateProvider>
      </body>
    </html>
  );
}
