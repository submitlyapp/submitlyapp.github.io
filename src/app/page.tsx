import Download from "@/components/Download";
import Image from "next/image";
import Github from "@/components/Github";
import StaggerContainer, { StaggerItem } from "@/components/StaggerChildren";
import BuyMeACoffee from "@/components/BuyMeACoffee";
import { MenuProvider } from "@/components/MenuContext";
import PopUp from "@/components/PopUp";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-linear-to-b dark:from-black dark:from-20% dark:to-[#555]">
      <div className="absolute inset-0 h-screen w-full z-0
      bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
      mask-[radial-gradient(80%_95%_at_50%_80%,black_40%,transparent_70%)]" aria-hidden />

      <main className="flex justify-center items-center h-[80vh] w-screen z-5">
        <div className="@container h-1/3 w-full max-w-180 py-2.5 px-3 flex flex-col justify-center items-center gap-2.5">

          <StaggerContainer>
            <StaggerItem>
              <div className="flex flex-col justify-center w-full h-fit">
                <h1 className="font-serif font-medium italic
                text-[clamp(2rem,8cqh,10rem)] text-center
                underline underline-offset-12 decoration-[5px]
                text-transparent bg-clip-text bg-linear-to-br from-black to-[#444] dark:from-white dark:to-[#ccc] px-3">Submitly</h1>
                <p className="text-center font-serif italic text-[clamp(1.25rem,2cqh,2rem)] w-fit min-w-full text-black/70 dark:text-white/70">Less time submitting. More time studying.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="text-center text-xl w-fit max-w-150">
                <span className="submitly">Submitly</span> takes the hassle out of homework submissions. By automating repetitive submission tasks, it helps students save valuable time and effort, so they can spend less time submitting assignments and more time focusing on what really matters.
              </p>
            </StaggerItem>
            <div className="flex p-5 gap-5 justify-center items-center w-full h-fit min-h-15">
              <StaggerItem> <Download /> </StaggerItem>
              <StaggerItem> <Github /> </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </main>

      <MenuProvider>
        <section id="download" className="relative flex justify-center items-center w-screen min-h-screen lg:h-[80vh] bg-zinc-200 dark:bg-zinc-950 border-y-2 border-black/20 dark:border-white/20
        p-10 z-1 overflow-clip">
          {/* <div>
            <div className="absolute inset-0 rounded-full -translate-1/2 bg-gray-600 blur-[100px] opacity-20 h-300 aspect-square" />
          </div> */}

          <div className="absolute inset-0 h-screen w-full z-0
          bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
          mask-[radial-gradient(80%_95%_at_0%_0%,black_40%,transparent_70%)]" aria-hidden />
          <div className="absolute inset-0 h-screen w-full z-0
          bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
          mask-[radial-gradient(80%_95%_at_100%_100%,black_40%,transparent_70%)]" aria-hidden />

          <div className="z-10 flex flex-col gap-5 p-5 h-full w-full sm:max-w-300 sm:max-h-150">
            <div className="flex justify-between">
              <h1 className="font-mono font-medium text-2xl md:text-4xl">Download <span className="font-serif font-bold italic">Submitly</span>.</h1>
              <BuyMeACoffee />
            </div>
            <div className="w-full h-full md:flex grid gap-5 text-3xl sm:text-4xl">
              <div className="h-full flex-1 border-2 dark:border-0 border-black bg-zinc-50 dark:bg-zinc-300 rounded-4xl
              flex flex-col p-5 gap-5">
                <h1 className="flex gap-2.5 text-black font-sans font-semibold border-b-2 border-black/50 pb-5"><Image src={"/windows.svg"} alt="" height={64} width={64} /> <span>Download for <span className="font-bold">Windows</span>!</span></h1>
                <p className="text-black text-2xl sm:text-3xl">Download <span className="submitly">Submitly</span> for Windows using the official installer.</p>
              </div>
              <div className="h-full flex-1 border-2 dark:border-0 border-black bg-zinc-50 dark:bg-zinc-300 rounded-4xl
              flex flex-col p-5 gap-5">
                <h1 className="flex gap-2.5 text-black font-sans font-semibold border-b-2 border-black/50 pb-5"><Image src={"/mac.svg"} alt="" height={64} width={64} /> <span>Download for <span className="font-bold">Mac</span>!</span></h1>
                <p className="text-black text-2xl sm:text-3xl italic">Coming soon!</p>
              </div>
              <div className="h-full flex-1 border-2 dark:border-0 border-black bg-zinc-50 dark:bg-zinc-300 rounded-4xl
              flex flex-col p-5 gap-5">
                <h1 className="flex gap-2.5 text-black font-sans font-semibold border-b-2 border-black/50 pb-5"><Image src={"/linux.svg"} alt="" height={64} width={64} /> <span>Download for <span className="font-bold">Linux</span>!</span></h1>
                <p className="text-black text-2xl sm:text-3xl italic">Coming soon!</p>
              </div>
            </div>
          </div>
        </section>

        <PopUp />
      </MenuProvider>

      <section id="faq" className="relative flex justify-center items-center w-screen min-h-[60vh] bg-zinc-300 dark:bg-mist-950 border-b-2 border-black/20 dark:border-white/20
        p-10 z-1 overflow-clip">
          <div className="min-h-100 min-w-100 h-1/3 w-1/3 p-5 text-xl flex flex-col gap-5">
            <h1 className="font-mono font-bold border-b-2 border-black/50 dark:border-white/50 pb-5">Frequently Asked Questions</h1>
            <FAQ />
          </div>
      </section>
    </div>
  );
}
