import AnchorButton from "./AnchorButton";

type Footer = {
  home: string,
  download: string,
  about: string,
  faq: string,
}

export default function Footer({ footer }: { footer: Footer }) {
  return (
    <div className="z-10 w-[calc(100vw-15px)] h-[10vh] bg-zinc-50 dark:bg-black
    flex justify-evenly items-center px-5 py-8 font-mono text-black/50 dark:text-white/50">
        <span className="text-xs sm:text-lg">ItsEasy @ 2026</span>
        <div className="flex gap-2 sm:gap-5 text-xs sm:text-lg">
            <AnchorButton href="#" text={footer.home} />
            <AnchorButton href="#download" text={footer.download} />
            <AnchorButton href="#about" text={footer.about} />
            <AnchorButton href="#faq" text={footer.faq} />
        </div>
        <a href="#" className="submitly text-md sm:text-xl">Submitly</a>
    </div>
  )
}
