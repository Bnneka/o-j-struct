import Link from "next/link";

export const metadata = { title: "FAQ", description: "Answers about building plan enquiries and starting a custom design with O J STRUCT." };

export default function FAQ() {
  return <section className="shell section">
    <p className="eyebrow">O J STRUCT / FAQ</p><h1>Frequently asked questions</h1>
    <div className="faq">
      <details><summary>How do I request a building plan?</summary><p>Browse the building designs, open a category and choose Request This Plan. The enquiry form will carry over your selection.</p></details>
      <details><summary>Can I discuss changes to a design?</summary><p>Yes. Include your preferred layout, plot dimensions if available, and any changes you have in mind in your enquiry.</p></details>
      <details><summary>What should I include in a custom design brief?</summary><p>Share the site location, intended use, rooms or spaces you need, and any budget or timeline you have in mind.</p></details>
    </div>
    <Link href="/contact" className="text-link">Ask about your project ↗</Link>
  </section>;
}
