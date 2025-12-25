import CarsSlider from "@/components/layout/CarsSlider";

const cars = [
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-3.png",
    badge: true,
  },
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-2.png",
    badge: true,
  },
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-1.png",
    badge: true,
  },
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-3.png",
    badge: true,
  },
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-2.png",
    badge: true,
  },
  {
    title: "Luxgrious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "/images/cars/car-1.png",
    badge: true,
  },
];

export default function LatestCars() {
  return (
    <section className="py-24 bg-[#E9E9E9]" id="cars">
      <div className="container">
        <h2 className="uppercase font-bold text-2xl md:text-4xl mb-5">
          Our latest cars
        </h2>

        <p className="max-w-[550px] mb-2">
          Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
          vestibulum diam sit adipis cing elit adipis cing elit.
        </p>

        <CarsSlider cars={cars} />
      </div>
    </section>
  );
}
