"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.div initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between p-4">
            <div>
                <motion.button whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="text-xl font-bold px-4 py-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Coin-Tracker</motion.button>
            </div>
            <div className="md:flex hidden">
                <motion.a whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Home</motion.a>
                <motion.a whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Dashboard</motion.a>
                <motion.a whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">List</motion.a>
            </div>
            <div>
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">
                    Settings
                </motion.button>
            </div>
        </motion.div>
    )
}