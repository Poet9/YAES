import CardContainer from "@/components/cardContainer";
import Carousel from "@/components/carousel";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Carousel />
            <CardContainer searchQuery={""} />
        </main>
    );
}
