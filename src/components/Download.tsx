"use client";

import Image from "next/image"

export default function Downolad({ text }: { text: string }) {
    return (
        <a href="#download" className="bg-white text-black font-semibold p-2.5 rounded-xl cursor-pointer w-fit
        flex gap-1.5 dark:border-0 border-2 border-black drop-shadow-xl dark:drop-shadow-0 dark:glow text-center hover-anim">
            <Image src="/windows.svg" alt="" height={24} width={24} /> {text}
        </a>
    )
};
