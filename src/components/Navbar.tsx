"use client";

import { useEffect, useState } from "react";
import AnchorButton from "./AnchorButton"

type NavBar = {
  home: string,
  download: string,
  about: string,
  faq: string,
}

export default function Navbar({ navbar }: { navbar: NavBar }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="sticky inset-0 z-100 w-screen h-[20vh] bg-zinc-50 dark:bg-black
    flex justify-center items-center px-5 py-8 border-black/50 dark:border-white/50 transition-all duration-75 ease-in"
    style={{borderBottomWidth: `${scroll > 50 ? 2 : 0}px`,}}>
      <div className="flex w-fit h-fit p-5 gap-2.5">
        <AnchorButton href="#" text={navbar.home} />
        <AnchorButton href="#download" text={navbar.download} />
        <AnchorButton href="#about" text={navbar.about} />
        <AnchorButton href="#faq" text={navbar.faq} />
      </div>
    </div>
  )
}
