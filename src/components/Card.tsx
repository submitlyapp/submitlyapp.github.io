export default function Card({ title, body }: { title: React.ReactElement, body: React.ReactElement }) {
  return (
    <div className="relative dark:glow dark:drop-shadow-none drop-shadow-xl">
    
        <div className="absolute inset-0 ring-2 ring-black/80 rounded-sm bg-transparent dark:ring-white/80 z-10" />
        
        <div className="relative w-full min-h-30 rounded-sm bg-zinc-50 dark:bg-black isolate p-1.5">
        <div className="absolute inset-0 z-0 grid opacity-30" />

        <div className="relative h-full w-full z-10">
            <h1 className="w-full text-center py-2.5 text-lg">{title}</h1>
            <p className="text-black/50 dark:text-white/50 text-center text-sm">{body}</p>
        </div>
        </div>

    </div>
  )
}
