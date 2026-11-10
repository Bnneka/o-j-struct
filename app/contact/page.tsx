import { bungalows } from "../../lib/bungalows";
import { company, designs, services } from "../../lib/content";
import { Form } from "./form";
export const metadata = { title: "Contact Us", description: "Send O J STRUCT a brief or enquire about a building design." };
export default async function Contact({searchParams}: {searchParams: Promise<{project?: string}>}) {
  const options = [...new Set([...services, ...designs].map(x => x.name)), ...bungalows.map(item => item.label), "Other"];
  const {project} = await searchParams;
  return <section className="shell section contact-grid"><div><p className="eyebrow">O J STRUCT / Contact</p><h1>Discuss your project.</h1><p>Tell us about your site and what you have in mind.</p>{company.location && <p>{company.location}</p>}{company.email && <p><a className="text-link" href={'mailto:'+company.email}>{company.email}</a></p>}{company.phone && <p><a className="text-link" href={'tel:'+company.phone.replace(/[^+\d]/g,'')}>{company.phone}</a></p>}</div><Form options={options} initial={project && options.includes(project) ? project : ""}/></section>;
}
