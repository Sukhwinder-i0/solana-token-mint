import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Token mint Launchpad",
  description: "Generate your own token",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#000] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
