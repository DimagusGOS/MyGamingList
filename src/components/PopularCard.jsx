export default function PopularCard({ title, platforms, image }) {
  return (
    <div className="shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="text-gray-600 text-smç">{platforms}</p>
      </div>
    </div>
  );
}
