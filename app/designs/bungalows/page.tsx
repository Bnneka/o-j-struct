import Link from "next/link";
import { BungalowGallery } from "../../bungalow-gallery";

export const metadata = { title: "22 Nigerian Bungalow Designs", description: "Browse 22 numbered bungalow concepts with distinct rooflines, layouts and façades." };

export default function Bungalows() {
  return <section className="shell section">
    <Link className="text-link" href="/designs">← All design categories</Link>
    <p className="eyebrow bungalow-kicker">O J STRUCT / House Designs</p>
    <h1>22 Nigerian Bungalow Designs</h1>
    <p>Compare single-storey concepts, from hipped roofs and deep verandas to flat-roof courtyard homes.</p>
    <BungalowGallery />
  </section>;
}
