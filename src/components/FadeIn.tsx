"use client";

import { motion } from "motion/react"

const FADE_IN = {
    "enter": {
        y: 0, opacity: 1
    }
}

export default function FadeIn({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
    variants={FADE_IN}
    initial={{y: 5, opacity: 0}}
    animate="enter">
      {children}
    </motion.div>
  )
}
