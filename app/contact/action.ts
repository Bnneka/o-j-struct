"use server";
import { bungalows } from "../../lib/bungalows";
import { designs, services } from "../../lib/content";
export type State = { message: string; success?: boolean; errors?: Record<string,string>; values?: Record<string,string> };
export async function enquire(_: State, form: FormData): Promise<State> {
  const values = Object.fromEntries(["name","email","phone","project","location","brief"].map(key => [key, String(form.get(key) ?? "").trim()]));
  const errors: Record<string,string> = {};
  for (const key of ["name","email","project","location","brief"]) if (!values[key]) errors[key] = "Please complete this field.";
  for (const key of Object.keys(values)) if (values[key].length > (key === "brief" ? 3000 : 160)) errors[key] = "This field is too long.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.project && ![...services, ...designs, ...bungalows.map(item => ({name:item.label})), {name:"Other"}].some(item => item.name === values.project)) errors.project = "Choose a project type from the list.";
  if (Object.keys(errors).length) return {message:"Review the highlighted fields.",errors,values};
  const { OJ_ENQUIRY_ENDPOINT, OJ_ENQUIRY_TOKEN, OJ_ENQUIRY_TO } = process.env;
  if (!OJ_ENQUIRY_ENDPOINT || !OJ_ENQUIRY_TOKEN || !OJ_ENQUIRY_TO) return {message:"Online enquiries are currently unavailable.",values};
  try {
    const response = await fetch(OJ_ENQUIRY_ENDPOINT, {
      method:"POST", headers:{"Content-Type":"application/json", Authorization:"Bearer "+OJ_ENQUIRY_TOKEN},
      body:JSON.stringify({...values,to:OJ_ENQUIRY_TO}), signal:AbortSignal.timeout(10000),
    });
    const receipt = response.ok ? await response.json() : null;
    if (receipt?.delivered === true) return {message:"Your enquiry has been delivered. Thank you for getting in touch.",success:true};
  } catch {
    return {message:"We couldn’t confirm delivery. Please try again later.",values};
  }
  return {message:"We couldn’t confirm delivery. Please try again later.",values};
}
