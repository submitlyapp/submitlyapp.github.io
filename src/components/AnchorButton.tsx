"use client";

export default function AnchorButton({ href, text, newTab }: { href: string, text: string, newTab?: boolean }) {
  return (
    <a href={href} className="scroll-smooth font-mono font-semibold text-white/60 hover:-translate-y-0.5 hover:text-white/80 transition-all duration-75 ease-in" target={newTab ? "_blank" : ""}>
      {text}
    </a>
  )
}
