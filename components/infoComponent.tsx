import { motion } from "framer-motion";
import React from "react";

export default function InfoComponent({children}: {children: React.ReactNode}) {
    return (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1 }} className="p-4 w-full rounded-xl bg-neutral-800 drop-shadow-2xl">
            <h1 className="text-2xl font-bold text-center">Info</h1>
            <div className="text-center mt-4">
                {children}
            </div>
        </motion.div>
    )
}