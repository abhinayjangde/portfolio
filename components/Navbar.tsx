"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="sticky top-0 z-20 backdrop-blur-sm transition-all duration-500 ease-out">
            <nav className="flex items-center justify-between py-2 px-4">
                <div className="">
                    <Link
                        href="/"
                        className="flex justify-center items-center space-x-2 group"
                    >
                        <Image
                            src="https://avatars.githubusercontent.com/u/64852930?v=4"
                            alt="avatar"
                            width={100}
                            height={100}
                            className="w-10 rounded-full group-hover:scale-110 transition-transform duration-300"
                        />
                        <h4 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            Abhinay Jangde
                        </h4>
                    </Link>
                </div>

                {/* Conditional Rendering  */}

                <div className="flex gap-2">
                    <VscColorMode
                        onClick={toggleTheme}
                        className="text-3xl md:hidden cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-500 ease-out active:scale-95"
                        aria-label="Toggle theme"
                    />
                    {isOpen ? (
                        <IoCloseSharp
                            onClick={toggleNavbar}
                            className="text-3xl md:hidden cursor-pointer hover:scale-110 hover:rotate-90 transition-all duration-300 active:scale-95"
                            aria-label="Close menu"
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={toggleNavbar}
                            className="text-3xl md:hidden cursor-pointer hover:scale-110 transition-all duration-300 active:scale-95"
                            aria-label="Open menu"
                        />
                    )}
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:space-x-2 items-end font-semibold">
                    <Link
                        href="/"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Projects
                    </Link>
                    <Link
                        href="https://www.codebhaiya.com/blogs"
                        target="_blank"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Blogs
                    </Link>
                    <VscColorMode
                        onClick={toggleTheme}
                        className="text-3xl mb-1 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-500 ease-out active:scale-95"
                        aria-label="Toggle theme"
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex absolute w-full md:hidden bg-white/95 dark:bg-gray-900/95 flex-col md:flex-row md:space-x-2 items-end font-semibold mb-2 transition-all duration-500 ease-out backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg animate-in slide-in-from-top">
                    <Link
                        href="/"
                        className="w-full text-right hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-x-1 active:scale-95"
                        onClick={toggleNavbar}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="w-full text-right hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-x-1 active:scale-95"
                        onClick={toggleNavbar}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blogs"
                        className="w-full text-right hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-x-1 active:scale-95"
                        onClick={toggleNavbar}
                    >
                        Blogs
                    </Link>
                </div>
            )}
        </header>
    );
}
