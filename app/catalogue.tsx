import Image from "next/image";
import Link from "next/link";
import { designs } from "../lib/content";
export function Catalogue() {
  return <div className="catalogue">{designs.map((d,i) => <Link href={'/designs/'+d.slug} key={d.slug} className="design-card">
    <div className="photo"><Image src={d.image} alt={d.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" /></div>
    <div className="card-label"><div><p className="eyebrow">0{i+1} / Concept image</p><h3>{d.name}</h3></div><span aria-hidden="true">↗</span></div>
  </Link>)}</div>;
}
