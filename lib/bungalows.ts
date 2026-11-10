const names = [
  "Stone Porch",
  "Recessed Entry",
  "Terracotta Gables",
  "Butterfly Roof",
  "Brick Spine",
  "Twin Hips",
  "Paved Courtyard",
  "Screened Breezeway",
  "Pavilion Carport",
  "Timber Veranda",
  "Curved Bay",
  "Stone Entry",
  "Stepped Roofline",
  "Courtyard Wings",
  "Exposed Rafters",
  "Arched Veranda",
  "Terracotta Screen",
  "Blue Porch",
  "Cantilevered Canopy",
  "Rain Garden",
  "Parallel Gables",
  "Timber Screens"
];
export const bungalows = names.map((name, index) => {
  const number = index + 1;
  return { name, number, label: `Bungalow ${number}`, image: `/bungalows/${number}.jpg` };
});
