import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Header variant="bottom" styleVariant="progressiveBlur" />
            <main>
                <Hero variant="stack" />
            </main>
        </>
    );
}
