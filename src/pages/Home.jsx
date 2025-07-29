import PopularTitles from "../components/PopularTitles";
import Header from "../components/Header";
import UpcomingGames from "../components/UpcomingGames";
import PopularConsoles from "../components/PopularConsoles";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="font-sans">
            <Header />
            <main className="px-8 py-6">
                <PopularTitles />
                <div className="flex flex-col justify-between lg:flex-row gap-10 mt-12">
                    <UpcomingGames />
                    <PopularConsoles />
                </div>
            </main>
            <Footer />
        </div>
    )
}