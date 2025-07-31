import GameCard from './GameCard';
import image from '../assets/sample.jpg'

export default function GameList({ games }) {
    // console.log(games);
    return (
        <div>
            {games.map((game) => (
                <GameCard key={game.id} game={game.name} image={image} genres={game.genres}/>
            ))}
        </div>
    );
}