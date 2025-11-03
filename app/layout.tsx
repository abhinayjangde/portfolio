import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
    title: "Abhinay Jangde",
    description: "Yes, I am a Software Engineer.",
    keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio"],
    authors: [{ name: "Abhinay Jangde" }],
    openGraph: {
        title: "Abhinay Jangde - Full Stack Developer",
        description: "Software Engineer Portfolio",
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
            <body className="max-w-4xl mx-auto transition-colors duration-500 ease-out">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
