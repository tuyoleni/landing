import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Header variant="bottom" styleVariant="progressiveBlur"/>
            <main className="space-y-20 bg-gray-50 min-h-[200vh]">
                <section className="w-full h-[300px] bg-blue-100 rounded-xl flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-blue-900">Hero Section Placeholder</h1>
                </section>

                <section className="w-full h-[300px] bg-pink-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-pink-900">Problem + Solution</h2>
                </section>

                <section className="w-full h-[300px] bg-green-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-green-900">Benefits</h2>
                </section>

                <section className="w-full h-[300px] bg-yellow-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-yellow-900">Testimonials</h2>
                </section>

                <section className="w-full h-[300px] bg-purple-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-purple-900">Features</h2>
                </section>

                <section className="w-full h-[300px] bg-indigo-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-indigo-900">Call To Action</h2>
                </section>

                <section className="w-full h-[300px] bg-red-100 rounded-xl flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-red-900">FAQs</h2>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    );
}
