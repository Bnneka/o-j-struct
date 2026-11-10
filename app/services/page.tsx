import Link from "next/link";
import { services } from "../../lib/content";

export const metadata = { title: "Our Services", description: "Explore architectural design, building plans, interiors and 3D visualisation." };

export default function Services() {
  return <section className="shell section">
    <p className="eyebrow">O J STRUCT / Our Services</p><h1>Design at every stage.</h1>
    <p>Choose the design support that fits your project.</p>
    <div className="services">{services.map((service, index) => <Link className="service" key={service.name} href={'/contact?project='+encodeURIComponent(service.name)}>
      <span className="eyebrow">0{index+1} / ↗</span><h2>{service.name}</h2><p>{service.description}</p>
    </Link>)}</div>
  </section>;
}
