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
    <div key={card.title} className="bg-gray-100 overflow-hidden flex flex-col">
      <div className="relative w-full aspect-4/3">
        <Image src={card.image} alt="car" fill className="object-cover" />
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
