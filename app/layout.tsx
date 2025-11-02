import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Abhinay Jangde",
    description: "Yes, I am a Software Engineer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="container mx-auto">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
