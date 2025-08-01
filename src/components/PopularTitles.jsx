import PopularCard from './PopularCard';
import { useEffect, useState } from 'react';

export default function PopularTitles() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    const fetchPopularGames = async () => {
      try {
        const res = await fetch(`${api}/games/popular`);
        if (!res.ok) throw new Error('Failed to fetch popular games');

        const data = await res.json();
        setGames(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching popular games:', err.message);
      }
    };

    // console.log('API URL:', api);

    fetchPopularGames();
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 flex ">Popular Titles</h2>
      {games.length >= 3 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.slice(0, 3).map((game, index) => (
            <PopularCard
              key={index}
              title={game.name}
              platforms={game.platforms.join(', ')}
              image={game.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Loading popular games...</p>
      )}
    </section>
  );
}
