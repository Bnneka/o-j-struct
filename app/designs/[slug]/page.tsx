import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { designs } from "../../../lib/content";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return designs.filter(design => design.slug !== "bungalows").map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props) {
  const {slug} = await params;
  const match = designs.find(d => d.slug === slug);
  if (!match) notFound();
  return { title: match.name, description: match.description, openGraph: { images: [match.image] } };
}
export default async function Design({params}: Props) {
  const {slug} = await params;
  const design = designs.find(d => d.slug === slug);
  if (!design) notFound();
  return <section className="shell section"><Link className="text-link" href="/designs">← All building designs</Link><h1>{design.name}</h1><p>{design.description}</p>
    <div className="actions"><Link className="button" href={'/contact?project='+encodeURIComponent(design.name)}>Request This Plan ↗</Link></div>
    <figure className="gallery"><div className="photo"><Image src={design.image} alt={design.alt} fill sizes="(max-width: 760px) 100vw, 70vw" /></div><figcaption>Concept image / Ask about layouts, floor areas and site-specific options.</figcaption></figure>
  </section>;
}
