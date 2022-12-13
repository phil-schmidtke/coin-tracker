"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {    
    return (
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between p-4">
            <div>
                <motion.button whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="px-4 py-2 text-xl font-bold cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl"><Link href="/" className="px-4 py-2">Coin-Tracker</Link></motion.button>
            </div>
            <div className="md:flex hidden">
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl"><Link href="/" className="p-4">Home</Link></motion.button>
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl"><Link href="/alarms" className="p-4">Alarms</Link></motion.button>
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mx-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl"><Link href="/about" className="p-4">About</Link></motion.button>
            </div>
            <div>
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer bg-neutral-800 rounded-xl hover:shadow-2xl">
                    Login
                </motion.button>
            </div>
        </motion.div>
    )
}