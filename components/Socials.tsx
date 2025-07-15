import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Socials() {
    return (
        <section className="my-4">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none  border-b-1 border-b-gray-200">socials</h2>
            <div className="flex text-3xl space-x-2 ml-1">
                <Link className="w-10 hover:scale-110 transition-all duration-300 text-[#0077B5]" href="https://www.linkedin.com/in/abhinay-jangde-a195011b9/">
                    <FaLinkedin />
                </Link>
                <Link className="w-10 hover:scale-110 transition-all duration-300" href="https://x.com/AbhinayJangde">
                    <FaSquareXTwitter />
                </Link>
                <Link className="w-10 hover:scale-110 transition-all duration-300" href="https://github.com/abhinayjangde">
                    <FaGithub />
                </Link>
                <Link className="w-10 hover:scale-110 transition-all duration-300 text-[#FF0000]" href="https://www.youtube.com/@abhinayjangde">
                  <FaYoutube />
                </Link>
                <Link className="w-10 hover:scale-110 transition-all duration-300" href="https://www.instagram.com/abhinayjangde">
                 <FaInstagram />
                </Link>
            </div>
        </section>
    );
}
