"use client";

import { motion } from "framer-motion";

export default function Info() {
    return (
        <motion.div initial={{y: 100}} animate={{y:0}} transition={{delay: 1}} className="p-4 w-full rounded-xl bg-neutral-800 drop-shadow-2xl">
          <h1 className="text-xl font-bold text-center">Info</h1>
        </motion.div>
    )
}