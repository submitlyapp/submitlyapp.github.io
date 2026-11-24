"use client";

import Image from "next/image"

export default function LearnMore({ text }: { text: string }) {
    return (
        <a href="#about" className="bg-white dark:bg-black text-black dark:text-white font-semibold p-2.5 rounded-xl cursor-pointer w-fit
        flex gap-1.5 border-2 border-black dark:border-white hover-anim text-center text-sm sm:text-[1rem]">
            {text} <Image src={"/arrow-up.svg"} width={24} height={24} alt="" className="dark:invert rtl:transform rtl:rotate-270" />
        </a>
    )
};
