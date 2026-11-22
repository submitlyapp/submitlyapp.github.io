"use client";

import Image from "next/image";

export default function BuyMeACoffee() {
  return (
    <button className="flex relative items-center h-full w-fit px-5 py-2 text-xl sm:text-2xl rounded-2xl bg-black border-2 border-white drop-shadow-2xl dark:drop-shadow-none dark:border-white/50 gap-1.5 cursor-pointer hover-anim text-white">
        <Image src={"/coffee.svg"} alt="" width={32} height={32} className="invert" /> Buy me a coffee! <Image src={"/arrow.svg"} alt="" width={32} height={32} className="invert" />
    </button>
  )
}
