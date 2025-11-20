import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-[url(/images/hero-section-img.png)] min-h-[90vh] bg-cover text-white flex items-center">
      <div className="container flex flex-col gap-10 py-16">
        <h1 className="uppercase font-bold text-[35px] md:text-5xl lg:text-7xl">
          Purchase your <br /> <span className="text-primary">perfect</span> car
        </h1>
        <div className="max-w-[500px]">
          <p className="text-xl mb-2 font-semibold">
            Over 1000+ New Cars Available Here
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscin elitVit ae
            pellentesque sed etiam tortor.
          </p>
        </div>
        <nav className="flex gap-x-8 gap-y-4 flex-wrap *:text-lg">
          <Button>Explore More</Button>
          <Button className="bg-transparent">See Cars</Button>
        </nav>
      </div>
    </section>
  );
}
