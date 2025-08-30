import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handles } from "@/helpers/handles";

export default function Footer(){
    return (
        <footer className="bg-gray-100 text-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Abhinay Jangde
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Full Stack Developer passionate about creating amazing web experiences.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                            <Link href="/projects" className="block text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
                            <Link href="/blogs" className="block text-gray-600 hover:text-gray-900 transition-colors">Blogs</Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <Link href={handles.github} target="_blank" className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all">
                                <FaGithub size={24} />
                            </Link>
                            <Link href={handles.linkedin} target="_blank" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all">
                                <FaLinkedin size={24} />
                            </Link>
                            <Link href={handles.x} target="_blank" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href={handles.youtube} target="_blank" className="text-gray-600 hover:text-red-600 hover:scale-110 transition-all">
                                <FaYoutube size={24} />
                            </Link>
                            <Link href={handles.instagram} target="_blank" className="text-gray-600 hover:text-pink-600 hover:scale-110 transition-all">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="mailto:abhinayjangde@gmail.com" className="text-gray-600 hover:text-green-600 hover:scale-110 transition-all">
                                <MdEmail size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                    <p className="text-gray-600">
                        © 2024 Abhinay Jangde | abhinayjangde.dev
                    </p>
                </div>
            </div>
        </footer>
    )
}