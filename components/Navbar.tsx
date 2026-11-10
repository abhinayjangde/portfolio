"use client";
import { useTheme } from "next-themes";
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
        <>
            <header className="sticky top-0 z-20 bg-transparent backdrop-blur-sm transition-all duration-500 ease-out">
                <nav className="flex min-h-20 items-center justify-between gap-6 py-4">
                    <div className="">
                        <Link
                            href="/"
                            className="flex justify-center items-center space-x-2 group"
                        >
                            <h4 className="text-lg font-semibold tracking-tight text-(--text-ink) group-hover:text-(--accent-navy) transition-colors duration-300">
                                Abhinay Jangde
                            </h4>
                        </Link>
                    </div>

                    {/* Conditional Rendering  */}

                    <div className="flex justify-center items-center gap-2">
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

                    <div className="hidden md:flex flex-wrap items-center justify-end gap-1 font-semibold text-(--text-ink)">
                        <Link
                            href="/"
                            className="rounded-full px-4 py-2 hover:bg-secondary hover:text-(--accent-navy) transition-all duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="rounded-full px-4 py-2 hover:bg-secondary hover:text-(--accent-navy) transition-all duration-300"
                        >
                            Projects
                        </Link>
                        <Link
                            href="https://www.codebhaiya.com/blogs"
                            target="_blank"
                            className="rounded-full px-4 py-2 hover:bg-secondary hover:text-(--accent-navy) transition-all duration-300"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="https://chat.codebhaiya.com"
                            target="_blank"
                            className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            CodeBhaiya AI
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute left-0 right-0 flex w-full flex-col items-end border-b border-(--border-subtle) bg-(--bg-card)/95 font-semibold text-(--text-ink) shadow-lg backdrop-blur-md transition-all duration-500 ease-out animate-in slide-in-from-top">
                        <Link
                            href="/"
                            className="w-full px-4 py-3 text-right hover:bg-secondary transition-all duration-300"
                            onClick={toggleNavbar}
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full px-4 py-3 text-right hover:bg-secondary transition-all duration-300"
                            onClick={toggleNavbar}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blogs"
                            className="w-full px-4 py-3 text-right hover:bg-secondary transition-all duration-300"
                            onClick={toggleNavbar}
                        >
                            Blogs
                        </Link>
                        <Link
                            href="https://chat.codebhaiya.com"
                            target="_blank"
                            className="w-full flex items-center justify-end gap-2 bg-(--accent-peach) px-4 py-3 text-(--text-ink) transition-all duration-300"
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
            <div className="theme-toggle-anchor">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="theme-toggle-button rounded-full border border-(--border-subtle) bg-(--bg-card) text-(--text-ink) shadow-lg transition-colors hover:bg-secondary"
                    aria-label={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                    title={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >
                    {theme === "dark" ? (
                        <MdOutlineLightMode className="text-2xl" />
                    ) : (
                        <MdDarkMode className="text-2xl" />
                    )}
                </button>
            </div>
        </>
    );
}
