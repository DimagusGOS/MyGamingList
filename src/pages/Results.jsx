import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoResults from './NoResults';

export default function Results() {
    const [searchParams] = useSearchParams();
    const gameName = searchParams.get('gameName');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/results?gameName=${gameName}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setGames(data);
                setTimeout(() => setIsLoading(false), 1000);
            });
    }, [gameName]);

    if (isLoading) 
        return (
        <div>
            <span className="visually-hidden">Loading Games List...</span>
        </div>
    )
    if (games.length === 0) {
        return <NoResults from={gameName} />;
    } else {
        return (
            <div>
                <h2>Games found witdh {gameName}</h2>
                <FlightList games={games} />
                <a href="/"><button>Search for Other Games</button></a>
            </div>
        );
    }
   
}