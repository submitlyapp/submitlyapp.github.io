import Download from "@/components/Download";
import Github from "@/components/Github";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0 h-screen w-full z-0
      bg-[linear-gradient(to_right,#ccc_3px,transparent_1px),linear-gradient(to_bottom,#ccc_3px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,#222_3px,transparent_1px),linear-gradient(to_bottom,#222_3px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[100px_100px]
      mask-[radial-gradient(80%_95%_at_50%_80%,black_40%,transparent_70%)]" aria-hidden />

      <main className="flex justify-center items-center h-screen w-screen z-10">
        <div className="@container h-1/3 w-full max-w-180 py-2.5 px-3 flex flex-col justify-center items-center">
          <h1 className="font-serif font-medium italic
          text-[clamp(2rem,10cqh,10rem)]
          underline underline-offset-12 decoration-[5px]
          text-transparent bg-clip-text bg-linear-to-br from-black to-[#444] dark:from-white dark:to-[#ccc] px-3">Submitly</h1>
          <p className="text-center font-serif italic text-[clamp(1.25rem,2.5cqh,2rem)] w-fit min-w-full text-black/70 dark:text-white/70">We handle the submissions. You handle the studying.</p>
          <div className="flex p-5 gap-5 justify-center items-center w-full h-fit min-h-15"> <Download /> <Github /> </div>
        </div>
      </main>
    </div>
  );
}
