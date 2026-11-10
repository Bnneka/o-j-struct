import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About Us", description: "Get to know the architectural design process at O J STRUCT." };

export default function About() {
  return <section className="shell section about">
    <div><p className="eyebrow">O J STRUCT / About Us</p><h1>Design starts with your brief.</h1>
      <p>O J STRUCT develops building designs around the site and the people who will use it. We start with your priorities, explore options through concept drawings, and refine the chosen direction into design documentation.</p>
      <Link className="text-link" href="/services">Explore our services ↗</Link>
    </div>
    <figure><Image src="/detail.jpg" alt="Contemporary staircase and louvres" width={768} height={768} sizes="(max-width: 760px) 100vw, 50vw"/><figcaption>Material and light study / Concept image</figcaption></figure>
  </section>;
}
