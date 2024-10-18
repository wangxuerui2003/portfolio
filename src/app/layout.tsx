import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray Wang",
  description: "Ray Wang personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={dmSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
