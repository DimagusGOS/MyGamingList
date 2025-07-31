export default function GameCard({ game, genres, image }) {
  return (
    <div className="flex my-5 shadow-md rounded-lg overflow-hidden max-w-xl w-full">
      <img 
        src={image} 
        alt={game} 
        className="w-96 h-48 object-cover flex-shrink-0" 
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="font-semibold text-lg mb-2">{game}</h3>
        <p className="text-gray-600 text-sm">
          <strong>Genres:</strong><br />{genres}
        </p>
      </div>
    </div>
  );
}
