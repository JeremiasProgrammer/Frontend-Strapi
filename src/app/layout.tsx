import NextTopLoader from "nextjs-toploader";

import { Inter } from "next/font/google";
import "./globals.css";

import CartContextProvider from "@/context/CartContext";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <NextTopLoader color="#000" />
                <main className="container mx-auto max-w-2xl mt-4 space-y-4 px-6">
                    <CartContextProvider>
                        <Header />
                        <PageTransition>{children}</PageTransition>
                    </CartContextProvider>
                </main>
            </body>
        </html>
    );
}
