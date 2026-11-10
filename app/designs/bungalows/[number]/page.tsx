import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bungalows } from "../../../../lib/bungalows";

type Props = { params: Promise<{ number: string }> };
export function generateStaticParams() {
  return bungalows.map(design => ({ number: String(design.number) }));
}
async function getDesign(params: Props["params"]) {
  const {number} = await params;
  const design = bungalows.find(item => String(item.number) === number);
  if (!design) notFound();
  return design;
}
export async function generateMetadata({params}: Props) {
  const design = await getDesign(params);
  return { title: design.label + " · " + design.name, description: "Explore this Nigerian bungalow concept from O J STRUCT.", openGraph: { images: [design.image] } };
}
export default async function Bungalow({params}: Props) {
  const design = await getDesign(params);
  return <section className="shell section">
    <Link className="text-link" href="/designs/bungalows">← All 22 bungalows</Link>
    <p className="eyebrow bungalow-kicker">Nigerian bungalow concept</p>
    <h1>{design.label}</h1><p>{design.name}</p>
    <figure className="gallery"><div className="photo"><Image src={design.image} alt={design.name + " bungalow concept"} fill sizes="(max-width: 760px) 100vw, 70vw"/></div><figcaption>Concept image. Enquire about adapting this design for your site.</figcaption></figure>
    <div className="actions"><Link className="button" href={'/contact?project='+encodeURIComponent(design.label)}>Enquire about {design.label} ↗</Link></div>
  </section>;
}
