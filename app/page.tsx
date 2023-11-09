import Image from "next/image";

import largeBg from "@/ressources/largeBg.jpg";
import CardContainer from "@/components/cardContainer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="overflow-clip  h-8/12  w-screen">
                <Image
                    src={largeBg}
                    alt=" "
                    height={0}
                    width={0}
                    style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
                />
                <h1 className="transform translate-x"> magic happens here</h1>
            </div>
            <CardContainer searchQuery={""} />
        </main>
    );
}
