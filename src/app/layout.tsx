"use client";
import "./globals.css";
import {Inter} from "next/font/google";
import {ReduxProvider} from "./redux/provider";
import Header from "./components/header/Header";
import SideMenu from "./components/sideMenu/SideMenu";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div>
            <Header />
            <SideMenu />
            <main>{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
