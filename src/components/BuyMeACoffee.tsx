"use client";

import Image from "next/image";
import { useMenu } from "./MenuContext";

export default function BuyMeACoffee({ text }: { text: string }) {
  const { setIsOpen } = useMenu();

  return (
    <button
    className="flex relative items-center h-full w-fit px-5 py-2 text-sm sm:text-2xl rounded-2xl bg-black border-2 border-white drop-shadow-2xl dark:drop-shadow-none dark:border-white/50 gap-1.5 cursor-pointer hover-anim text-white"
    onClick={() => setIsOpen(true)}>
        <Image src={"/coffee.svg"} alt="" width={32} height={32} className="invert" /> {text} <Image src={"/arrow.svg"} alt="" width={32} height={32} className="invert rtl:rotate-180" />
    </button>
  )
}
