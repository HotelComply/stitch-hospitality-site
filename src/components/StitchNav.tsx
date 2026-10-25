"use client";
import { useState } from "react";

export function Wordmark() {
  return <span className="st-wordmark">stitch<span>HOSPITALITY</span></span>;
}
export default function StitchNav() {
  const [open, setOpen] = useState(false);
  return <header className="st-header"><a className="st-brand" href="/" aria-label="Stitch Hospitality home"><Wordmark /></a><button className="st-menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="st-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button><nav id="st-navigation" className={open ? "is-open" : ""} aria-label="Main navigation">{[["Services","/#services"],["Engagements","/#engagements"],["Experience","/#experience"],["Resources","/products"]].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="st-nav-cta" href="/#contact" onClick={()=>setOpen(false)}>Discuss an Assignment <span aria-hidden="true">↗</span></a></nav></header>;
}
