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
    const { setTheme } = useTheme();

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <header className="sticky top-0 z-20 backdrop-blur-sm">
            <nav className="flex items-center justify-between py-2 px-4">
                <div className="">
                    <Link
                        href="/"
                        className="flex justify-center items-center space-x-2"
                    >
                        <Image
                            src="https://avatars.githubusercontent.com/u/64852930?v=4"
                            alt="avatar"
                            width={100}
                            height={100}
                            className="w-10 rounded-full"
                        />
                        <h4 className="text-xl font-semibold">
                            Abhinay Jangde
                        </h4>
                    </Link>
                </div>

                {/* Conditional Rendering  */}

                <div className="flex gap-2">
                    <VscColorMode
                        onClick={toggleTheme}
                        className="text-3xl md:hidden"
                    />
                    {isOpen ? (
                        <IoCloseSharp
                            onClick={toggleNavbar}
                            className="text-3xl md:hidden"
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={toggleNavbar}
                            className="text-3xl md:hidden"
                        />
                    )}
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:space-x-2 items-end font-semibold">
                    <Link
                        href="/"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800"
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800"
                    >
                        Projects
                    </Link>
                    <Link
                        href="https://codebhaiya.com/blogs"
                        target="_blank"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full dark:hover:bg-gray-800"
                    >
                        Blogs
                    </Link>
                    <VscColorMode
                        onClick={toggleTheme}
                        className="text-3xl mb-1 cursor-pointer"
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex absolute w-full md:hidden bg-white flex-col md:flex-row md:space-x-2 items-end font-semibold mb-2">
                    <Link
                        href="/"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        onClick={toggleNavbar}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        onClick={toggleNavbar}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blogs"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        onClick={toggleNavbar}
                    >
                        Blogs
                    </Link>
                </div>
            )}
        </header>
    );
}
