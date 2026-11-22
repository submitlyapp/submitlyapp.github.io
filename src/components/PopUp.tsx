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
        <motion.div
          key="popup"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-white z-9999"
        >
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>

          <h1>My Popup</h1>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}