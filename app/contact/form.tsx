"use client";
import { useActionState } from "react";
import { enquire, type State } from "./action";
const fields = [["name","Full name","text"],["email","Email address","email"],["phone","Phone (optional)","tel"],["project","Project type","select"],["location","Project location","text"],["brief","Short project brief","textarea"]];
export function Form({options,initial}: {options:string[];initial:string}) {
  const [state,action,pending] = useActionState<State,FormData>(enquire,{message:""});
  return <form action={action} noValidate>
    <div role="status">{state.message}</div>
    {fields.map(([key,label,type]) => {
      const error = state.errors?.[key];
      const common = {id:key,name:key,defaultValue:state.values?.[key] ?? (key==="project" ? initial : ""),required:key!=="phone","aria-invalid":Boolean(error),"aria-describedby":error ? key+"-error" : undefined};
      return <div className="field" key={key}><label htmlFor={key}>{label}</label>
        {type==="select" ? <select {...common}><option value="">Select a project type</option>{options.map(option => <option key={option}>{option}</option>)}</select> : type==="textarea" ? <textarea {...common} rows={5} maxLength={3000}/> : <input {...common} type={type} maxLength={160}/>}
        {error && <small id={key+"-error"}>{error}</small>}
      </div>;
    })}
    <button className="button" disabled={pending}>{pending ? "Sending…" : "Send enquiry ↗"}</button>
  </form>;
}
