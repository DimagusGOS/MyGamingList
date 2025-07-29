export default function PopularCard({ title, text, image }) {
  return (
    <div className="shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-black flex">{title}</h3>
        <p className="text-gray-600 text-sm flex">{text}</p>
      </div>
    </div>
  );
}
