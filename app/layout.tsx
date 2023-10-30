import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header/";
import "./globals.css";
import ThemeButton from "@/components/header/themeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "YAES",
    description: "yet another ecommerce website",
};

// dark mode evaluation cuz why not
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
