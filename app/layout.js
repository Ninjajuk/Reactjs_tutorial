// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
// import { Providers } from "./redux/provider";
import '../app/style/variables.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "react js ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <Providers>
  
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    // </Providers>
  );
}
