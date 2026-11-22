import AnchorButton from "./AnchorButton";

export default function Footer() {
  return (
    <div className="z-10 w-[calc(100vw-15px)] h-[10vh] bg-zinc-50 dark:bg-black
    flex justify-between items-center px-5 py-8 font-mono text-black/50 dark:text-white/50">
        <span>ItsEasy @ 2026</span>
        <div className="flex gap-5">
            <AnchorButton href="#download" text="Download" />
            <AnchorButton href="#about" text="About" />
            <AnchorButton href="https://github.com/itseasyy" newTab text="Source" />
            <AnchorButton href="#faq" text="FAQ" />
        </div>
        <a href="#" className="submitly text-xl">Submitly</a>
    </div>
  )
}
