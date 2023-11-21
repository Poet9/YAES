import CardContainer from "@/components/cardContainer";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Carousel />
            <CardContainer searchQuery={""} />
            <Footer />
        </main>
    );
}
