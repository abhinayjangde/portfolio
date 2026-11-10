import { handles } from "@/helpers/handles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function WhoAmI() {
    return (
        <section className="md:py-12">
            <div className="hero-grid">
                <div className="avatar-wrap">
                    <Image
                        src="https://avatars.githubusercontent.com/u/64852930?v=4"
                        alt="Profile Picture"
                        className="hero-avatar"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="max-w-lg">
                    <p className="kicker mb-5">
                        Software Engineer
                    </p>
                    <h1 className="editorial-heading text-4xl md:text-4xl font-bold my-4">
                        Hey, I&apos;m <span className="marker-word">Abhinay</span> Jangde
                    </h1>
                    <p className="hero-lead">
                        Hi👋, I&apos;m a passionate Full Stack Developer who
                        thrives on the dynamic intersection of coding,
                        technology, and{" "}
                        <span className="marker-underline">
                            education
                        </span>
                        . Eager to learn and adapt to new technologies in a
                        professional environment.
                    </p>
                    <p className="text-muted-foreground hero-lead mt-4">
                        In my free time I love watching movies.
                    </p>
                    <div className="hero-actions">
                        <Link className="pill-button button-primary" href={handles.github} target="_blank">
                            Explore my work
                        </Link>
                        <Link className="pill-button button-secondary" href="/resume.pdf" target="_blank">
                            Download resume
                        </Link>
                    </div>
                </div>
                <div className="hero-links">
                    <Link
                        className="hero-icon-link"
                        href={handles.github}
                        target="_blank"
                    >
                        <FaGithub className="inline mr-2" />
                        Github
                    </Link>
                    <Link
                        className="hero-icon-link"
                        href={handles.linkedin}
                        target="_blank"
                    >
                        <FaLinkedin className="inline mr-2" />
                        LinkedIn
                    </Link>
                    <Link
                        className="hero-icon-link"
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
