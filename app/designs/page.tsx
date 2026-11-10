import Link from "next/link";
import { Catalogue } from "../catalogue";
export const metadata = { title: "Building Designs", description: "Browse building design concepts from bungalows to commercial spaces." };
export default function Designs() {
  return <section className="shell section"><p className="eyebrow">O J STRUCT / Catalogue</p><h1>Building Designs</h1><p>Explore a design direction and enquire about adapting it to your project.</p><div className="actions"><Link className="button" href="/designs/bungalows">Browse 22 Bungalows ↗</Link></div><Catalogue /></section>;
}
