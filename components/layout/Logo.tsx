import Link from "next/link";
import Image from "next/image";

export default function Logo({ light = false, className = "" }) {
  return (
    <Link href="/" className={className}>
      <Image
        width={100}
        height={30}
        alt="careos logo"
        src={
          light ? "/images/logos/light-logo.svg" : "/images/logos/dark-ogo.svg"
        }
      />
    </Link>
  );
}
