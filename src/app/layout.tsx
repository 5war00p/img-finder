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
        <link
          href="https://fonts.cdnfonts.com/css/euclid-circular-b"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[url('/home-bg.png')] bg-no-repeat bg-cover">
        {children}
      </body>
    </html>
  );
}
