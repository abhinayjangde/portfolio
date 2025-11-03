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
        <footer className="text-gray-800 mt-20 flex gap-2 flex-col md:flex-row items-center justify-between p-6 border-t border-gray-300">
            <div className="">
                <p className="text-gray-600">
                    © 2024 Abhinay Jangde | abhinayjangde.dev
                </p>
            </div>

            <div className="flex space-x-4">
                <Link
                    href={handles.github}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all"
                >
                    <FaGithub size={24} />
                </Link>
                <Link
                    href={handles.linkedin}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all"
                >
                    <FaLinkedin size={24} />
                </Link>
                <Link
                    href={handles.x}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all"
                >
                    <FaTwitter size={24} />
                </Link>
                <Link
                    href={handles.youtube}
                    target="_blank"
                    className="text-gray-600 hover:text-red-600 hover:scale-110 transition-all"
                >
                    <FaYoutube size={24} />
                </Link>
                <Link
                    href={handles.instagram}
                    target="_blank"
                    className="text-gray-600 hover:text-pink-600 hover:scale-110 transition-all"
                >
                    <FaInstagram size={24} />
                </Link>
                <Link
                    href="mailto:abhinayjangde@gmail.com"
                    className="text-gray-600 hover:text-green-600 hover:scale-110 transition-all"
                >
                    <MdEmail size={24} />
                </Link>
            </div>
        </footer>
    );
}
