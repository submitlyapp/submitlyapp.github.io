"use client";

import { createPortal } from "react-dom";
import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMenu } from "./MenuContext";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function PopUp() {
  const { isOpen, setIsOpen } = useMenu();
  const isClient = useIsClient();

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 h-screen w-screen z-90 bg-black/50 pointer-events-none" />
            <motion.div
                key="popup"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-1/2 min-w-100 min-h-100 bg-zinc-50 dark:bg-black border-black dark:border-white border-2 z-9999
                rounded-3xl flex flex-col p-5"
            >
                <div className="flex justify-between text-4xl font-mono border-b-2 border-black/50 dark:border-white/50 pb-5">Support me! <button className="h-full aspect-square cursor-pointer" onClick={() => setIsOpen(false)}>X</button></div>
                <div className="grid grid-cols-2 grid-rows-2 size-full p-2.5 gap-2.5 font-mono text-2xl">
                    <div className="relative rounded-2xl border-2 p-2.5 flex flex-col gap-1.5">
                        <div className="w-full h-full">
                            <h1 className="border-b-2 pb-1.5">With <span className="font-semibold italic">Instapay</span></h1>
                            <p className="font-light text-xl">Support my work with a donation via my <span className="font-semibold italic">Instapay</span> link</p>
                        </div>
                        <button className="w-full py-1.5 border-2 dark:border-0 dark:glow rounded-2xl bg-white text-black
                        cursor-pointer hover-anim">Reveal link!</button>
                    </div>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}