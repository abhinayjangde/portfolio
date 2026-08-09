import React from "react";
import { FaBriefcase, FaYoutube, FaNetworkWired } from "react-icons/fa";

export default function Experience() {
    return (
        <section className="my-10">
            <div className="flex items-center gap-3 mb-6 pb-4">
                <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100">
                    experience
                </h2>
            </div>
            
            <div className="flex flex-col gap-6 relative">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-14 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-800 -z-10 hidden sm:block"></div>

                {/* Experience 1 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                    
                    <div className="flex-1 bg-gray-200 dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8 group-hover:shadow-lg dark:group-hover:border-gray-700 transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-2 md:items-center">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Full Stack Engineer
                            </h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                                November 2025 &ndash; Present
                            </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                            <FaBriefcase className="sm:hidden" />
                            SN Verse &bull; Bilaspur, Chhattisgarh, India
                        </p>
                        <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside ml-4 space-y-2 leading-relaxed">
                            <li>Designing and developing full-stack features end-to-end, contributing to scalable system architecture and reliable production deployments with high engineering standards.</li>
                        </ul>
                    </div>
                </div>

                {/* Experience 2 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                    
                    <div className="flex-1 bg-gray-200 dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8 group-hover:shadow-lg dark:group-hover:border-gray-700 transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-2 md:items-center">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Content Creator &ndash; Coding Education
                            </h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                                March 2022 &ndash; Present
                            </span>
                        </div>
                        <p className="text-red-500 dark:text-red-400 font-medium mb-4 flex items-center gap-2">
                            <FaYoutube className="sm:hidden" />
                            YouTube (Self-employed) &bull; Remote
                        </p>
                        <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside ml-4 space-y-2 leading-relaxed">
                            <li>Created and published a complete Python course in Hindi, reaching thousands of learners and simplifying complex programming concepts for beginners.</li>
                            <li>Produced ongoing educational content on JavaScript, React, Node.js, Docker, and DevOps, demonstrating deep technical breadth and communication skills.</li>
                        </ul>
                    </div>
                </div>

                {/* Experience 3 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                    
                    <div className="flex-1 bg-gray-200 dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8 group-hover:shadow-lg dark:group-hover:border-gray-700 transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-2 md:items-center">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Networking Intern
                            </h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                                Sept 2023 &ndash; Oct 2023
                            </span>
                        </div>
                        <p className="text-green-600 dark:text-green-500 font-medium mb-4 flex items-center gap-2">
                            <FaNetworkWired className="sm:hidden" />
                            Mahamaya Internet Service Pvt. Ltd. &bull; Bilaspur, India
                        </p>
                        <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside ml-4 space-y-2 leading-relaxed">
                            <li>Built and deployed a Car Number Plate Detector with a team of three, containerizing the solution using Docker for reproducible, scalable deployment.</li>
                            <li>Gained practical experience with computer networking—routers, CCTV systems, VPNs—and applied Linux/WSL for network troubleshooting and security hardening.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
