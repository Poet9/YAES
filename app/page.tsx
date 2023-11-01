import Image from "next/image";

import largeBg from "@/ressources/largeBg.jpg";
import CardContainer from "@/components/cardContainer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col overflow-y-hidden h-[88vh] w-screen">
                <Image
                    src={largeBg}
                    alt=" "
                    style={{ objectFit: "cover" }}
                    className="w-full object-fit"
                />
                <h1 className="transform translate-x"> magic happens here</h1>
            </div>
            <CardContainer searchQuery={""} />
        </main>
    );
}
