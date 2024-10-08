import type { Metadata } from "next";
import { Be_Vietnam_Pro, Play } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import PlaySong from "./components/play/Play";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["900", "800", "700", "600", "500", "400", "300", "200", "100"],
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
  title: "Music",
  description: "Project 4: Website music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/demo/favicon.svg" />
      </head>
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${BeVietnamPro.className}  bg-[url("https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center bg-no-repeat `}>
        <div className="bg-[#f5f5f5] mx-[40px] rounded-[18px] mt-[20px] min-h-screen 	">
          <div className="container mx-auto">
            <div className="flex items-start pt-[20px]">
              <div className="w-[280px]">
                <Sider />
              </div>
              <div className="ml-[20px] flex-1">
                <Search />
                <main className="mt-[30px] mb-[120px]">
                  {children}
                </main>
              </div>
            </div>
          </div>
          <PlaySong />
        </div>
      </body>
    </html>
  );
}
