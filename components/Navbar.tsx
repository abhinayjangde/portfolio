"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-[20] md:mx-80 border-b border-b-gray-200">
            <nav className="container bg-white mx-auto w-full flex items-center justify-between py-2 px-4">
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

                <div className="hidden md:flex flex-col md:flex-row md:space-x-2 items-end font-semibold">
                    <Link
                        href="/"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blogs"
                        className="hover:bg-gray-100 px-4 py-2 rounded-full"
                    >
                        Blogs
                    </Link>
                </div>

            </nav>
                {isOpen && (
                    <div className="flex md:hidden bg-white flex-col md:flex-row md:space-x-2 items-end font-semibold">
                        <Link
                            href="/"
                            className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blogs"
                            className="hover:bg-gray-100 px-4 py-2 rounded-full"
                        >
                            Blogs
                        </Link>
                    </div>
                )}
        </header>
    );
}
