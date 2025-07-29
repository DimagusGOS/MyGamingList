import UpcomingCard from "./UpcomingCard"
import image1 from "../assets/sample.jpg";

export default function UpcomingGames() {

    return (
        <div className="grid grid-cols-1 w-5/7">
            <h2 className="text-3xl font-bold mb-6 flex ">Upcoming Games</h2>
            <UpcomingCard game="Game 1" description="Body text for whatever..." image={image1} price="$10.99"/>
            <UpcomingCard game="Game 2" description="Body text for whatever..." image={image1} price="$20.99"/>
            <UpcomingCard game="Game 3" description="Body text for whatever..." image={image1} price="$15.99"/>
        </div>
    )
}