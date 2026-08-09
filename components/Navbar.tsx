"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

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

                <div className="flex justify-center items-center gap-2">
                    {
                        theme === "light" ? (<MdDarkMode

                            onClick={toggleTheme}
                            className="text-2xl md:hidden cursor-pointer"
                            aria-label="Toggle theme"
                        />) : (<MdOutlineLightMode

                            onClick={toggleTheme}
                            className="text-2xl md:hidden cursor-pointer"
                            aria-label="Toggle theme"
                        />)
                    }

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
                    <Link
                        href="https://chat.codebhaiya.com"
                        target="_blank"
                        className="flex items-center gap-1.5 bg-linear-to-r from-black to-slate-600 hover:from-black hover:to-slate-500 text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-violet-500/25 text-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        CodeBhaiya AI
                    </Link>

                    {
                        theme === "light" ? (<MdDarkMode

                            onClick={toggleTheme}
                            className="text-2xl mb-[0.4rem] cursor-pointer transition-all duration-500 ease-out"
                            aria-label="Toggle theme"
                        />) : (<MdOutlineLightMode

                            onClick={toggleTheme}
                            className="text-2xl mb-[0.4rem] cursor-pointer transition-all duration-500 ease-out"
                            aria-label="Toggle theme"
                        />)
                    }

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
                    <Link
                        href="https://chat.codebhaiya.com"
                        target="_blank"
                        className="w-full flex items-center justify-end gap-2 bg-linear-to-r from-violet-600 to-indigo-600 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-x-1 active:scale-95"
                        onClick={toggleNavbar}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        CodeBhaiya AI — Live
                    </Link>
                </div>
            )}
        </header>
    );
}
