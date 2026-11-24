"use client";

export default function AnchorButton({ href, text, newTab }: { href: string, text: string, newTab?: boolean }) {
  return (
    <a href={href} className="scroll-smooth font-mono font-semibold text-[#333] dark:text-[#999] hover:-translate-y-0.5 hover:text-black dark:hover:text-[#bbb] transition-all duration-75 ease-in" target={newTab ? "_blank" : ""}>
      {text}
    </a>
  )
}
