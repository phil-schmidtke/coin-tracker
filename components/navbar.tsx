"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [authenticated, setAuthenticated] = useState(false);
    const [wallet, setWallet] = useState("");

    async function connect() {
        // @ts-ignore
        if (window.ethereum!) {
            try {
                // @ts-ignore
                const wallet = await window.ethereum.request({ method: 'eth_requestAccounts' });
                if (wallet[0].length > 3) {
                    console.log(wallet[0]);
                    setAuthenticated(true);
                    setWallet(wallet[0]);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

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
            <div className="md:hidden flex">
                <motion.button whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 text-xl font-bold cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">
                        {/* tailwind svg menu icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
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
            {authenticated ? <div className="my-2"><p className="flex lg:hidden">{wallet.substring(0, 8)}...</p><p className="hidden lg:flex">{wallet}</p></div> 
            :
            <div>
                <motion.button whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 mx-2 cursor-pointer bg-neutral-800 rounded-xl hover:shadow-2xl"
                        onClick={() => connect()}>
                    Login
                </motion.button>
            </div>
    }
        </motion.div>
    )
}