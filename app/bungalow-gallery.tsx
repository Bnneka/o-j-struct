import Image from "next/image";
import Link from "next/link";
import { bungalows } from "../lib/bungalows";

export function BungalowGallery() {
  return <div className="catalogue bungalow-gallery">{bungalows.map(design => (
    <Link className="design-card bungalow-card" key={design.number} href={`/designs/bungalows/${design.number}`}>
      <div className="photo"><Image src={design.image} alt={design.name + " bungalow concept"} fill sizes="(max-width: 500px) 100vw, (max-width: 960px) 50vw, 33vw"/></div>
      <div className="card-label"><div><p className="eyebrow">Nigerian bungalow concept</p><h3>{design.label}</h3><p>{design.name}</p><span className="card-details">View Details ↗</span></div></div>
    </Link>
  ))}</div>;
}
