import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    return (
        <section className="my-10">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100">
                    education
                </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                <div className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 p-8 rounded-2xl relative transition-all duration-300 hover:shadow-lg dark:hover:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                                <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                                Bachelor of Technology
                            </h3>
                            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                Computer Science Engineering
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                Chouksey Engineering College, Bilaspur, India
                            </p>
                        </div>
                        
                        <div className="mt-4 md:mt-0 text-left md:text-right">
                            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm outline outline-1 outline-blue-200 dark:outline-blue-800 font-medium mb-2">
                                CGPA: 7.63/10
                            </span>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                                June 2021 &ndash; July 2025
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                            Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Data Structures & Algorithms", 
                                "Operating Systems", 
                                "Database Management Systems", 
                                "Distributed Systems", 
                                "Networking", 
                                "Object-Oriented Programming"
                            ].map((course, idx) => (
                                <span 
                                    key={idx} 
                                    className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm font-medium"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
