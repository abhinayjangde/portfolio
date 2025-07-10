import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
    return (
        <main className="p-1">
            <WhoAmI/>
            <Socials/>
            <Skills/>
        </main>
    );
}
