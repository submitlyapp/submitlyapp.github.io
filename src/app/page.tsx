import Download from "@/components/Download";
import Image from "next/image";
import Github from "@/components/Github";
import StaggerContainer, { StaggerItem } from "@/components/StaggerChildren";
import BuyMeACoffee from "@/components/BuyMeACoffee";
import { MenuProvider } from "@/components/MenuContext";
import PopUp from "@/components/PopUp";
import FAQ from "@/components/FAQ";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0 h-screen w-full z-0
      bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
      mask-[radial-gradient(80%_95%_at_50%_80%,black_40%,transparent_70%)]" aria-hidden />

      <main className="flex justify-center items-center h-[80vh] w-screen dark:bg-linear-to-b dark:from-black dark:from-20% dark:to-[#111]">
        <div className="@container h-1/3 w-full max-w-180 py-2.5 px-3 flex flex-col justify-center items-center gap-2.5 z-10">

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

      <section id="about" className="flex flex-col sm:flex-row justify-evenly pt-10 relative w-screen min-h-[80vh] items-center border-t-2 dark:border-white/20 border-black/20">
        <div className="absolute inset-0 h-screen w-full z-0
        bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
        mask-[radial-gradient(80%_95%_at_50%_80%,black_40%,transparent_70%)]" aria-hidden />

        <div className="@container z-10 max-w-150 min-w-80 w-1/2 flex flex-col px-10 gap-5">
          <h1 className="font-bold text-[clamp(1.5rem,10cqw,2rem)] border-b-2 pb-2.5">About <span className="submitly">Submitly</span></h1>
          <div className="flex flex-col gap-2.5 text-sm sm:text-[1.5rem]">
            <p><span className="submitly">Submitly</span> takes the hassle out of turning in homework. Instead of <i>clicking through clunky educational portals</i> and uploading assignments one by one, <span className="submitly">Submitly</span> automates the repetitive submission process so you can get back to studying.</p>
            <p>Simply upload your completed files or enter your answers, choose your logged-in educational portal, and let <span className="submitly">Submitly</span> handle the rest. It <i>doesn't do</i> the homework for you; it just streamlines the final step of turning it in. Completely <i>free</i> and easy to use.</p>
          </div>
        </div>

        <div className="flex flex-col scale-85 sm:scale-100 items-center min-h-100 min-w-100 w-100 p-10 gap-10 transform rotate-5">
          <h1 className="text-2xl font-mono font-semibold w-full text-left">The <b>Process</b></h1>
          <div className="w-full flex flex-col items-center gap-1.5">
            <Card title={(<>Upload your <b>homework</b></>)} body={(<>Upload your completed homework to <span className="submitly">Submitly</span>, by either uploading a file, or entering your answer.</>)} />

            <div className="w-0.5 h-10 bg-linear-to-b from-transparent from-5% via-black/50 dark:via-white/50 to-95% to-transparent" />

            <Card title={(<>Select your <b>portal</b></>)} body={(<>Select the educational portal you want <span className="submitly">Submitly</span> to submit to. Make sure you're logged in!</>)} />

            <div className="w-0.5 h-10 bg-linear-to-b from-transparent from-5% via-black/50 dark:via-white/50 to-95% to-transparent" />
            
            <Card title={(<>Watch the <b>magic</b></>)} body={(<><span className="submitly">Submitly</span> will take it from there. Just sit back, relax, and watch the magic happen.</>)} />

          </div>
        </div>
      </section>

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

      <section id="faq" className="relative flex justify-center items-center w-screen min-h-[60vh] bg-zinc-100 dark:bg-mist-950 border-b-2 border-black/20 dark:border-white/20
        p-10 z-1 overflow-clip">
          <div className="min-h-100 min-w-100 h-1/3 w-1/3 p-5 text-xl flex flex-col gap-5">
            <h1 className="font-mono font-bold border-b-2 border-black/50 dark:border-white/50 pb-5">Frequently Asked Questions</h1>
            <FAQ />
          </div>
      </section>
    </div>
  );
}
