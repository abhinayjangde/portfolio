import Link from "next/link";

export default function Achievements() {
    return (
        <section className="my-4">
            <h2 className="text-3xl md:text-4xl my-4 md:border-none border-b-gray-200">
                achievements
            </h2>
            <p className="font-semibold text-sm md:text-lg opacity-75">
                {" "}
                I have created a Python course for beginners in Hindi on
                YouTube.
            </p>
            <section className="">
                <div className="mt-6 text-center p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-gray-800">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                        Want to learn more?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Check out my YouTube channel for more tutorials and my
                        website for structured courses.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="https://www.youtube.com/@abhinayjangde"
                            target="_blank"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            <span>YouTube Channel</span>
                        </Link>
                        <Link
                            href="https://www.codebhaiya.com/courses"
                            target="_blank"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            <span>All Courses</span>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
