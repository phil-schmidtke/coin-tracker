"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CryptoListItem({data, link, name, ticker, active, delay}: any) {
    return (
        <Link href={link}>
            <motion.div initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 * delay }}
                        className={`flex justify-between cursor-pointer mb-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === ticker ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                        >
                    <h1>{name}</h1>
                    <p>{data[ticker].USD.MKTCAP}</p>
                    <p>{data[ticker].USD.PRICE}</p>
            </motion.div>
        </Link>
    )
}