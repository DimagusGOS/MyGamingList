export default function GameCard({ game, genres, image}) {
  return (
    <div className="flex my-5">
      <img src={image} alt={game} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="font-semibold text-lg my-4">{game}</h3>
        <p className="text-gray-600 text-sm"><strong>Genres:</strong> <br />{genres}</p>
      </div>
    </div>
  );
}
