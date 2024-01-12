import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image Finder",
  description: "Assignment for Linebroker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {Array.from(Array(9)).map((img, imgIndex) => (
          <link key={imgIndex} href="/bgs/0.jpg" rel="preload" as="image" />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
