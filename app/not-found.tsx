import NavLink from "@/components/ui/NavLink";

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="container text-center">
        <h2 className="font-bold text-4xl text-primary mb-4">Not Found</h2>
        <p className="mb-3">Could not find requested resource</p>
        <NavLink>Return Home</NavLink>
      </div>
    </section>
  );
}
