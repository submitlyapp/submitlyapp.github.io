"use client";

import Image from "next/image"

export default function Github() {
    return (
        <a href="https://github.com/itseasyy" target="_blank" className="bg-white dark:bg-black text-black dark:text-white font-semibold p-2.5 rounded-xl cursor-pointer w-fit
        flex gap-1.5 border-2 border-black dark:border-white hover-anim text-center">
            <Image src="/github.svg" alt="" height={24} width={24} className="dark:invert" /> View source! <Image src="/open.svg" alt="" width={24} height={24} className="dark:invert" />
        </a>
    )
};
