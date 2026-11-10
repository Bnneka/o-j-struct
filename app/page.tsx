import Image from "next/image";
import Link from "next/link";
import { BungalowGallery } from "./bungalow-gallery";
import { Catalogue } from "./catalogue";
import { services } from "../lib/content";
export default function Home() {
  return <>
    <section className="hero"><div className="shell hero-content">
      <p className="eyebrow">Architecture & Building Design</p>
      <h1>Nigerian Building Designs</h1>
      <p className="hero-copy">Architecture and building design for the way you live.</p>
      <div className="actions"><Link className="button outline" href="/contact">Contact</Link><Link className="button hero-light" href="#featured-plans">Learn More</Link></div>
    </div><div className="shell hero-caption">01 / Modern Nigerian duplex · Concept image</div></section>
    <section className="shell section about" id="about">
      <figure><Image src="/detail.jpg" alt="Concept rendering of a contemporary staircase and louvres" width={768} height={768} sizes="(max-width: 760px) 100vw, 50vw"/><figcaption>Material and light study / Concept image</figcaption></figure>
      <div><p className="eyebrow">01 / About Us</p><h2>From the first brief to the details that matter.</h2><p>O J STRUCT develops architectural designs around the site and the people who will use it. We begin with your brief, explore the possibilities through concept drawings, and refine the selected direction into design documentation.</p><Link className="text-link" href="/about">Get to know O J STRUCT ↗</Link></div>
    </section>
    <section className="tint" id="services"><div className="shell section"><p className="eyebrow">02 / Our Services</p><h2>Design at every stage.</h2><div className="services">{services.map((s,i) => <Link key={s.name} className="service" href={'/contact?project='+encodeURIComponent(s.name)}><span className="eyebrow">0{i+1} / ↗</span><h3>{s.name}</h3><p>{s.description}</p></Link>)}</div></div></section>
    <section id="featured-plans" className="shell section"><p className="eyebrow">03 / Featured House Designs</p><h2>22 Nigerian bungalow designs</h2><p>Explore distinct single-storey concepts and select a design to see it up close.</p><BungalowGallery /></section><section className="tint"><div className="shell section"><p className="eyebrow">Design Categories</p><h2>Explore more building types</h2><Catalogue /></div></section>
    <section className="contact-band"><div className="shell section"><p className="eyebrow">04 / Contact Us</p><h2>What would you like to build?</h2><Link href="/contact" className="button">Start an enquiry ↗</Link></div></section>
  </>;
}
