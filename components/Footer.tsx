import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handles } from "@/helpers/handles";

export default function Footer() {
    return (
        <footer className="text-gray-800 dark:text-gray-200 mt-20 flex gap-2 flex-col md:flex-row items-center justify-between p-6 border-t border-gray-300 dark:border-gray-700 transition-all duration-500">
            <div className="">
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    © 2024 Abhinay Jangde | abhinayjangde.dev
                </p>
            </div>

            <div className="flex space-x-4">
                <Link
                    href={handles.github}
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 hover:-rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="GitHub Profile"
                >
                    <FaGithub size={24} />
                </Link>
                <Link
                    href={handles.linkedin}
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-125 hover:rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin size={24} />
                </Link>
                <Link
                    href={handles.x}
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-125 hover:-rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="X (Twitter) Profile"
                >
                    <FaTwitter size={24} />
                </Link>
                <Link
                    href={handles.youtube}
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:scale-125 hover:rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="YouTube Channel"
                >
                    <FaYoutube size={24} />
                </Link>
                <Link
                    href={handles.instagram}
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-125 hover:-rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="Instagram Profile"
                >
                    <FaInstagram size={24} />
                </Link>
                <Link
                    href="mailto:abhinayjangde@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:scale-125 hover:rotate-12 transition-all duration-300 active:scale-95"
                    aria-label="Email"
                >
                    <MdEmail size={24} />
                </Link>
            </div>
        </footer>
    );
}
