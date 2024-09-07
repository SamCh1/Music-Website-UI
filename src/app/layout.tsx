import type { Metadata } from "next";
import {Be_Vietnam_Pro, Play} from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import PlaySong from "./components/play/Play";

const BeVietnamPro = Be_Vietnam_Pro({
   subsets: ["vietnamese"], 
   weight: ["900","800","700","600","500","400","300","200","100"],
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
        className={`${BeVietnamPro.className}  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF3jvkhiHrC4W-Vu9J_0A1kvni4C5qZrj1w&s")] bg-cover bg-no-repeat `}>
      <div className="bg-[#dbdbdb] mx-[40px] rounded-[18px] mt-[20px]">
        <div className="container mx-auto">
          <div className="flex items-start pt-[20px]">
            <div className="w-[280px]">
              <Sider/>
            </div>
            <div className="ml-[20px] flex-1">
              <Search/>
              <main className="mt-[30px] mb-[120px]">
                {children}
              </main> 
            </div>
          </div>
        </div>
        <PlaySong/>
      </div>
      </body>
    </html>
  );
}
