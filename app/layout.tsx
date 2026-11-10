import type { Metadata } from "next";
import Link from "next/link";
import { company, designs } from "../lib/content";
import { MobileNav } from "./mobile-nav";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "O J STRUCT | Architecture & Building Design", template: "%s | O J STRUCT" },
  description: "Explore contemporary building designs and discuss your project with O J STRUCT.",
  ...(process.env.OJ_SITE_URL && { metadataBase: new URL(process.env.OJ_SITE_URL) }),
  openGraph: { images: ["/nigerian-duplex.jpg"] },
};
const nav = [["Home","/"],["About Us","/about"],["Our Services","/services"],["Building Designs","/designs"],["FAQ","/faq"],["Contact Us","/contact"]];
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>
    <a className="skip" href="#main">Skip to content</a>
    <header><div className="shell bar"><Link href="/" className="brand"><span aria-hidden="true">◩</span> O J STRUCT</Link>
      <nav aria-label="Main navigation">{nav.map(([name,href]) => <Link key={name} href={href}>{name}</Link>)}</nav>
      <MobileNav links={nav}/>
    </div></header>
    <main id="main">{children}</main>
    <footer><div className="shell footer-grid">
      <div><h2>Our Menu</h2><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/designs">Buy Plans Here</Link>{company.accountUrl && <a href={company.accountUrl}>Account Details</a>}<Link href="/contact">Contact Us</Link></div>
      <div><h2>Building Designs</h2>{designs.map(d => <Link key={d.slug} href={'/designs/'+d.slug}>{d.name}</Link>)}</div>
      <div><h2>Quick Contact Info</h2><p>Have a site, a sketch or an idea? Tell us what you’d like to build.</p>{company.location && <p>{company.location}</p>}{company.email && <a href={'mailto:'+company.email}>{company.email}</a>}{company.phone && <a href={'tel:'+company.phone.replace(/[^+\d]/g,'')}>{company.phone}</a>}<Link href="/contact">Start an enquiry ↗</Link></div>
    </div><div className="shell footer-base"><span>O J STRUCT</span><span>Architecture & Building Design</span></div></footer>
  </body></html>;
}
