
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

export default function Skills() {
    return (
        <section className="my-4">
            <h2 className="text-3xl md:text-4xl my-4">skills</h2>
            <div className="flex text-4xl space-x-2">
                <FaReact />
                <RiNextjsFill />
                <IoLogoJavascript />
                <BiLogoTypescript />
            </div>
        </section>
    );
}
