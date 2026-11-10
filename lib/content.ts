export const company = {
  location: process.env.OJ_LOCATION,
  email: process.env.OJ_EMAIL,
  phone: process.env.OJ_PHONE,
  accountUrl: process.env.OJ_ACCOUNT_URL,
};
export const services = [
  { name: "Architectural design", description: "Develop a concept around your site, brief and the way you want to use the space." },
  { name: "Building plan development", description: "Turn your concept into coordinated drawings and design documentation." },
  { name: "Interior design", description: "Bring layouts, finishes, lighting and furnishings together in a coherent scheme." },
  { name: "3D visualisation", description: "Explore the form, scale and materials of your design before building." },
];
export const designs = [
  { slug: "bungalows", name: "Bungalows", image: "/ng-bungalows.jpg", alt: "Single-storey bungalow with a hipped roof and a paved forecourt", description: "Single-level living with direct connections to the garden and outdoor rooms." },
  { slug: "duplexes", name: "Duplexes", image: "/ng-duplexes.jpg", alt: "Two-storey duplex with a recessed balcony and a paved compound", description: "Two-storey homes that give shared spaces and private rooms a level of their own." },
  { slug: "apartments", name: "Flats & Apartments", image: "/ng-apartments.jpg", alt: "Three-storey block of flats with shaded balconies", description: "Multi-unit layouts that make room for daylight, privacy and shared circulation." },
  { slug: "non-residential", name: "Non-Residential", image: "/ng-non-residential.jpg", alt: "Two-storey neighbourhood plaza with street-facing shopfronts", description: "Flexible layouts for workplaces, retail and community use." },
  { slug: "interior-design", name: "Interior Design", image: "/ng-interior-design.jpg", alt: "Duplex living room with a coffered ceiling and fluted timber wall", description: "Material-led interiors shaped around everyday use." },
];
