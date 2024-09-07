import type { Metadata } from "next";
import {Be_Vietnam_Pro} from "next/font/google";
import "./globals.css";

const BeVietnamPro = Be_Vietnam_Pro({
   subsets: ["vietnamese"], 
   weight: "300",
  });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Project 4",
  description: "Project 4: Website music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={BeVietnamPro.className}
      >
        {children}
      </body>
    </html>
  );
}
