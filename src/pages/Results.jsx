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
                <a href="/"><button className="focus:outline-none text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Search for Other Games</button></a>
            </div>
        );
    }
   
}