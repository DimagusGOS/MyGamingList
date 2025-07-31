import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function GameDetail({token}) {
    const {id} = useParams();
    const[game, setGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            const res = await fetch(`http://localhost:4000/flights/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok){
                const data = await res.json();
                setGame(data);
            } else {
                alert('Unauthorized or game not found');
            }
        };

        fetchGame();
    }, [id, token]);

    if (!game)
        return <p>Loading game details...</p>

    return (
        <div>
            <h2>{game.name || 'game Detail'}</h2>
            <p><strong>genres:</strong> {game.genres}</p>
            <p><strong>platform:</strong> {game.platform}</p>
            <p><strong>score:</strong> {game.review}</p>
        </div>
    );
}

export default GameDetail;