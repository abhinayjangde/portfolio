import Link from "next/link";
import { FaYoutube, FaLaptopCode, FaStar } from "react-icons/fa";

export default function Achievements() {
    return (
        <section className="my-10">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                
                <h2 className="text-3xl md:text-4xl">
                    achievements
                </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                {/* Achievement Card */}
                <div className="card-gradient-border group">
                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl relative overflow-hidden h-full flex flex-col justify-between z-10 transition-colors">
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500"></div>
                        
                        <div>
                        
                            
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                                Python Course for Beginners (Hindi)
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                I have created a comprehensive, easy-to-understand Python course tailored for Hindi-speaking beginners. 
                                It covers everything from absolute basics to advanced concepts, completely free on YouTube.
                            </p>
                            
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                                    Full Playlist
                                </span>
                                <span className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                                    Hindi Language
                                </span>
                                <span className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                                    Logic Building
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                            <Link
                                href="https://www.youtube.com/@abhinayjangde"
                                target="_blank"
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
                            >
                                <FaYoutube className="text-xl" />
                                <span>Watch on YouTube</span>
                            </Link>

                            <Link
                                href="https://www.codebhaiya.com/courses"
                                target="_blank"
                                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <FaLaptopCode className="text-xl" />
                                <span>View All Courses</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
