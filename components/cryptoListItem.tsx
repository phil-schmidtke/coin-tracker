"use client";

import { motion } from "framer-motion";

type ItemProps = {
    data: any;
    setActiveSymbol: any;
    getHist: (symbol: string) => Promise<void>;
    link: string;
    name: string;
    ticker: string;
    active: string;
    delay: any;
}

export default function CryptoListItem({data, setActiveSymbol, getHist, link, name, ticker, active, delay}: ItemProps) {

    function update() {
        console.log("upadte")
        setActiveSymbol(link)
        getHist(link)
    }

    return (
        <div onClick={() => update()}>
            <motion.div initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 * delay }}
                        className={`flex justify-between cursor-pointer mb-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === ticker ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                        >
                    <h1>{name}</h1>
                    <p>{data[ticker].USD.MKTCAP}</p>
                    <p>{data[ticker].USD.PRICE}</p>
            </motion.div>
        </div>
    )
}