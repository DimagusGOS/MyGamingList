export default function UpcomingCard({ game, description, image, price}) {
  return (
    <div className="flex my-5">
      <img src={image} alt={game} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="font-semibold">{game}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
