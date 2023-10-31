import largeBg from "@/ressources/largeBg.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="h-4/6 wrap w-full">
                <Image src={largeBg} alt=" " className="w-full h-2/6" />
            </div>
            <div className="z-5 flex items-center">
                <h1>hello world!</h1>
            </div>
        </main>
    );
}
