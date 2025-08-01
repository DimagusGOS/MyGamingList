import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoResults from './NoResults';
import GameList from '../components/GameList';

export default function Results() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const api = import.meta.env.VITE_API_URL;
        fetch(`${api}/games?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);

                setGames(data);
                setTimeout(() => setIsLoading(false), 1000);
            });
    }, [name]);

    if (isLoading) 
        return (
        <div>
            <span className="visually-hidden">Loading Games List...</span>
        </div>
    )
    if (games.length === 0) {
        return <NoResults gameName={name} />;
    } else {
        return (
            <div>
                <GameList games={games} />
                <a href="/"><button>Search for Other Games</button></a>
            </div>
        );
    }
   
}