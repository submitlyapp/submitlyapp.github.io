"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import AnchorButton from "./AnchorButton"
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

type NavBar = {
  home: string,
  download: string,
  about: string,
  faq: string,
}

export default function Navbar({ navbar }: { navbar: NavBar }) {
  const [scroll, setScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const params = useParams<{ lang: string }>();

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  const handleRedirect = (to: string) => {
    router.push(`/${to}/`, { scroll: false })
    setIsOpen(false)
  }

  return (
    <div className="sticky inset-0 z-100 w-full min-h-[20vh] bg-zinc-50 dark:bg-black
    flex justify-evenly items-center px-5 py-8 border-black/50 dark:border-white/50 transition-all duration-75 ease-in font-mono text-[#333] dark:text-[#999]"
    style={{borderBottomWidth: `${scroll > 50 ? 2 : 0}px`,}}>
      <a href="#" className="submitly text-xl">Submitly</a>
      <div className="hidden sm:flex w-fit text-sm sm:text-[1rem] h-fit p-5 gap-2.5">
        <AnchorButton href="#" text={navbar.home} />
        <AnchorButton href="#download" text={navbar.download} />
        <AnchorButton href="#about" text={navbar.about} />
        <AnchorButton href="#faq" text={navbar.faq} />
      </div>
      
      <div className="relative flex flex-col gap-1.5 text-sm sm:text-[1rem] border-b-2 border-black/60 dark:border-white/60">
        <button className="flex justify-between gap-2.5 w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
          {params.lang === "ar" ? "عربية" : "English"}
          <Image src={"/chevron.svg"} alt="" width={24} height={24} className={` dark:invert ${isOpen ? 'transform rotate-180' : ''} transition-all duration-150 ease-in `} />
        </button>

        <div className={ ` grid transition-all duration-100 ease-in ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' } ` }>
          <div className="overflow-hidden">
            <div className="w-full p-1.5 hover:dark:bg-white/10 hover:bg-black/10 transition-all duration-75 ease-in rounded-sm">
              <button className="z-10 w-full cursor-pointer rtl:text-right text-start"
              onClick={() => handleRedirect("ar")}>عربية</button>
            </div>
            <div className="w-full p-1.5 hover:dark:bg-white/10 hover:bg-black/10 transition-all duration-75 ease-in rounded-sm">
              <button className="z-10 w-full cursor-pointer rtl:text-right text-start"
              onClick={() => handleRedirect("en")}>English</button>
            </div>
          </div>
        </div>
      </div>

      <button className="relative sm:hidden cursor-pointer"
      onClick={() => setIsNavOpen(!isNavOpen)}>
        <Image src={"/burger.svg"} alt="" width={24} height={24} className="dark:invert opacity-80" />
        
        <AnimatePresence>
          {isNavOpen &&
          <motion.div
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 10, opacity: 0}}
          className="absolute sm:hidden text-xl right-0 top-[calc(100%+10px)] flex flex-col bg-zinc-50 dark:bg-black p-5 gap-2.5">
            <AnchorButton href="#" text={navbar.home} />
            <AnchorButton href="#download" text={navbar.download} />
            <AnchorButton href="#about" text={navbar.about} />
            <AnchorButton href="#faq" text={navbar.faq} />
          </motion.div>}
        </AnimatePresence>
      </button> 

    </div>
  )
}
