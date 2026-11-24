"use client";

import { createPortal } from "react-dom";
import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMenu } from "./MenuContext";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function PopUp({ dict }: { dict: { supportMe: string, withInstapay: string, instaDesc: string, revealLink: string } }) {
  const { isOpen, setIsOpen } = useMenu();
  const isClient = useIsClient();

  const [ instaOpen, setInstaOpen ] = useState(false);

  if (!isClient) return null;

  const handleInsta = () => {
        setInstaOpen(true);
    }

  return createPortal(
    <div>
        <AnimatePresence>
            {(isOpen) && (
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
                        <div className="flex justify-between text-4xl font-mono border-b-2 border-black/50 dark:border-white/50 pb-5">{dict.supportMe} <button className="h-full aspect-square cursor-pointer" onClick={() => setIsOpen(false)}>X</button></div>
                        <div className="flex flex-col sm:grid grid-cols-2 grid-rows-2 size-full p-2.5 gap-2.5 font-mono text-2xl">
                            <motion.div
                            whileHover={{scale: 1.03}}
                            className="relative rounded-2xl border-2 p-2.5 flex flex-col gap-1.5">
                                <div className="w-full h-full">
                                    <h1 className="border-b-2 pb-1.5 text-lg sm:text-2xl"><Markdown options={{forceInline: true}}>{dict.withInstapay}</Markdown></h1>
                                    <p className="font-light text-lg sm:text-xl"><Markdown options={{forceInline: true}}>{dict.instaDesc}</Markdown></p>
                                </div>
                                <button className="w-full py-1.5 border-2 dark:border-0 dark:glow rounded-xl sm:rounded-2xl bg-white text-black
                                cursor-pointer hover-anim text-lg sm:text-2xl"
                                onClick={handleInsta}>{dict.revealLink}</button>
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {(instaOpen) && (
                                <motion.div
                                initial={{y: 10, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: 10, opacity: 0}}
                                className="fixed flex flex-col items-center inset-1/2 -translate-1/2 min-w-100 max-w-200 w-2/3 aspect-43/46 bg-zinc-50 dark:bg-black z-999
                                rounded-3xl border-2 justify-between border-black dark:border-white p-5 gap-2">
                                    <h1 className="flex w-full py-5 px-8 text-2xl justify-between font-bold font-mono">Instapay <button onClick={() => setInstaOpen(false)} className="cursor-pointer">X</button></h1>
                                    <div className="h-3/4 aspect-43/46 relative"><Image src="/instapay.jpeg" alt="instapay qr code" fill className="rounded-2xl drop-shadow-2xl dark:drop-shadow-none" /></div>
                                    <a href="https://ipn.eg/S/submitly/instapay/2D1xSR" target="_blank" className="font-mono text-xs sm:text-lg underline">https://ipn.eg/S/submitly/instapay/2D1xSR</a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </div>,
    document.body
  );
}