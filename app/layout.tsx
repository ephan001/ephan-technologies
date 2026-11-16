
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ephan Technologies | Building the Right Product for Your Vision",
  description:
    "Ephan Technologies builds websites, applications and custom technology solutions for businesses, organizations and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
