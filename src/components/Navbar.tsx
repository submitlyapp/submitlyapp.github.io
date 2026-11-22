import Image from "next/image"
import AnchorButton from "./AnchorButton"

export default function Navbar() {
  return (
    <div className="absolute inset z-10 w-screen h-[20vh] bg-zinc-50 dark:bg-black
    flex justify-center items-center px-5 py-8">
      <div className="flex w-fit h-fit p-5 gap-2.5">
        <AnchorButton href="#download" text="Download" />
        <AnchorButton href="#about" text="About" />
        <AnchorButton href="https://github.com/itseasyy" newTab text="Source" />
        <AnchorButton href="#faq" text="FAQ" />
      </div>
    </div>
  )
}
