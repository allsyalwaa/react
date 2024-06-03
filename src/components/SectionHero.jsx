export default function SectionHero() {
  return (
    <section className="container py-10">
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-y-8">
        <div className="md:order-1 order-2 col-span-2">
          <h1 className="text-6xl font-bold mb-5">Hero Section</h1>
          <p className="t">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magni rerum amet maxime eos, iure non ab cumque culpa consequuntur.
          </p>
        </div>
        <img
          className="order-1 md:order-2 size-full"
          src="http://via.placeholder.com/400"
          alt="placeholder"
        />
      </div>
    </section>
  );
}
