import Image from "next/image";
import NavLink from "./NavLink";

type CardProps = {
  card: {
    image: string;
    title: string;
    description: string;
  };
};

export default function Card({ card }: CardProps) {
  return (
    <div
      key={card.title}
      className="bg-gray-100 overflow-hidden flex flex-col group"
    >
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={card.image}
          alt="car"
          fill
          className="object-cover group-hover:scale-105 duration-200"
        />
      </div>

      <div className="p-5 grow flex flex-col items-start justify-between gap-5">
        <div>
          <h3 className="font-bold mb-3">{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <NavLink className="py-2.5">Learn more</NavLink>
      </div>
    </div>
  );
}
