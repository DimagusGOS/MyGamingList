import PopularCard from './PopularCard';
import image1 from "../assets/sample.jpg";

export default function PopularTitles() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 flex ">Popular Titles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PopularCard title="Game 1" text="Body text for whatever..." image={image1} />
        <PopularCard title="Game 2" text="Body text to expand..." image={image1} />
        <PopularCard title="Game 3" text="Body text to share..." image={image1} />
      </div>
    </section>
  );
}
