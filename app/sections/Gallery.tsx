import Card from "@/components/ui/Card";
import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "/images/cars/car-4.png",
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores eos qui ratione voluptatem se.",
  },
  {
    id: 2,
    image: "/images/cars/car-5.png",
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
];

const sections = [
  {
    id: 1,
    image: "/images/cars/car-3.png",
    title: "Sed ut perspiciatis unde omnis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut fugit, sed quia consequuntur",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
  },
  {
    id: 2,
    image: "/images/cars/car-2.png",
    title: "Sed ut perspiciatis unde omnis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut fugit, sed quia consequuntur",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>

        <div className="flex flex-col gap-6 mb-10">
          {sections.map((section) => (
            <section
              key={section.id}
              className="grid md:grid-cols-2 items-center gap-8 bg-gray-100 p-4 group"
            >
              <div className="relative w-full aspect-4/3 md:group-even:order-2">
                <Image
                  src={section.image}
                  alt="car"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-primary font-bold mb-4 text-xl">
                  {section.title}
                </h3>
                <p className="mb-8">{section.description}</p>
                <p className="text-xs">{section.paragraph}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 bg-gray-100 p-5">
          <div className="relative w-full aspect-4/3">
            <Image
              src="/images/cars/car-6.png"
              alt="car"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-4/3">
            <Image
              src="/images/cars/car-7.png"
              alt="car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
