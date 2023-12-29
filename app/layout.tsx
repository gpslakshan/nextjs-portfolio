import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidemenu from "./Sidemenu";
import Header from "./Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sachin Lakshan | Software Engineer",
  description:
    "Explore a dynamic showcase of my expertise as a passionate software engineer. From innovative web applications to robust backend systems, my portfolio highlights a diverse range of projects, demonstrating proficiency in cutting-edge technologies and a passion for clean, efficient code. Elevate your digital experience with a developer committed to delivering solutions that blend creativity and functionality seamlessly. Dive into my portfolio for a glimpse into the world of software engineering excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <div className="w-full flex flex-row relative">
          <Sidemenu />
          <main className="w-full md:pl-[230px] xl:pl-[350px]">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
