import { handles } from "@/helpers/handles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function WhoAmI() {
    return (
        <section className="md:py-12">
            <div className="flex gap-4 md:flex-row flex-col items-center">
                <Image
                    src="https://drive.google.com/uc?id=1q_bkFfhsgK_izp-8J1ANlBsI1CsGyDXl"
                    alt="Profile Picture"
                    className="rounded-full size-40 md:mt-4"
                    width={100}
                    height={100}
                />
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold my-4">
                        Hey, I&apos;m Abhinay Jangde
                    </h1>
                    <p className="font-semibold opacity-75">
                        Hi👋, I&apos;m a passionate Full Stack Developer who
                        thrives on the dynamic intersection of coding,
                        technology, and{" "}
                        <span className="text-blue-800 underline dark:text-yellow-400">
                            education
                        </span>
                        . Eager to learn and adapt to new technologies in a
                        professional environment.
                    </p>
                    <br />
                    <p className="font-semibold opacity-75">
                        In my free time I love watching movies.
                    </p>
                </div>
                <div className="flex md:flex-col gap-2 justify-between md:justify-center">
                    <Link
                        className="border px-3 py-2"
                        href={handles.github}
                        target="_blank"
                    >
                        <FaGithub className="inline mr-2" />
                        Github
                    </Link>
                    <Link
                        className="border px-3 py-2"
                        href={handles.linkedin}
                        target="_blank"
                    >
                        <FaLinkedin className="inline mr-2" />
                        LinkedIn
                    </Link>
                    <Link
                        className="border px-3 py-2"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        <IoMdDocument className="inline mr-2" />
                        Resume
                    </Link>
                </div>
            </div>
        </section>
    );
}
