import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Socials() {
    return (
        <section className="my-4">
            <h2 className="text-3xl md:text-4xl my-4">socials</h2>
            <div className="flex text-4xl space-x-2">
                <Link href="https://www.linkedin.com/in/abhinay-jangde-a195011b9/">
                    <FaLinkedin />
                </Link>
                <Link href="https://x.com/AbhinayJangde">
                    <FaSquareXTwitter />
                </Link>
                <Link href="https://github.com/abhinayjangde">
                    <FaGithub />
                </Link>
                <Link href="https://www.youtube.com/@abhinayjangde">
                  <FaYoutube />
                </Link>
                <Link href="https://www.instagram.com/abhinayjangde">
                 <FaInstagram />
                </Link>
            </div>
        </section>
    );
}
