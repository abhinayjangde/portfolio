import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Abhinay Jangde | Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Node.js, and Generative AI. Building scalable web applications and LLM-powered systems.",
    keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio", "Generative AI", "Software Engineer", "TypeScript", "Python"],
    authors: [{ name: "Abhinay Jangde" }],
    openGraph: {
        title: "Abhinay Jangde - Full Stack Engineer",
        description: "Full Stack Engineer specializing in React, Node.js, and Generative AI.",
        url: "https://abhinayjangde.dev",
        siteName: "Abhinay Jangde Portfolio",
        images: [{ url: "/og-image.png" }],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${fraunces.variable} mx-auto transition-colors duration-500 ease-out`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
