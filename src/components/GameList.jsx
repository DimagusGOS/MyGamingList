import GameCard from './GameCard';
import image from '../assets/sample.jpg'

export default function GameList({ games }) {
    // console.log(games);
    return (
        <div className='flex flex-col items-center'>
            {games.map((game) => (
                <GameCard key={game.id} game={game.name} image={game.image} genres={game.genres.join(', ')} platforms={game.platforms.join(', ')}/>
            ))}
        </div>
    );
}