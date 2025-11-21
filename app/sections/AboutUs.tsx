import Button from "@/components/ui/Button";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="bg-white py-24">
      <div className="container grid lg:grid-cols-2 gap-x-10 gap-y-12 items-center">
        <div className="relative w-full aspect-4/3">
          <Image
            src="/images/cars/car-1.png"
            alt="car"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="uppercase text-primary font-bold text-4xl mb-5">
            About Us
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
            vestibulum diam sit adipis cing elit adipis cing elit.
          </p>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            ultrices scelerisque urna sed man proin lacinia. Posuere facilisis
            ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh
            elementum eget. Integer dolor urna egestas sit donec neque, mi elit.
            Diam praesent mi blandit uices vel amet. Sapien, ac tortor vel ut
            pharetra, celerisqd. sklois kias rabs raffead book.
          </p>
          <Button className="text-lg">Read More</Button>
        </div>
      </div>
    </section>
  );
}
