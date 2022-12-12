"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getHistorical } from "../utils/getHistorical";
import CryptoList from "./cryptoList";
import CurrentChart from "./currentChart";
import Info from "./info";

export default function StartPage({data}: any) {
    const [activeSymbol, setActiveSymbol] = useState('BTC');
    const [histData, setHistData] = useState(data.historical)
    const [loading, setLoading] = useState(false)

    async function getHist(symbol: string) {
        setLoading(true)
        const histData = await getHistorical(symbol)
        setHistData(histData)
        setLoading(false)
    }
    
    return (
        <div>
            <div className="md:flex block">
                <div className="md:w-1/3 p-4">
                    <CryptoList data={data.topTen.DISPLAY} setActiveSymbol={setActiveSymbol} active={activeSymbol} getHist={getHist} />
                </div>
                <div className="md:w-2/3 w-full text-center p-4 mt-8">
                    {loading ? <><div className="flex justify-center items-center h-screen">
                                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-fuchsia-900"></div>
                                </div></>
                                : 
                                <motion.div initial={{x: 75, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.2}}>
                                    <h1 className="text-xl font-bold">{activeSymbol}</h1>
                                    <div className="border-2 border-neutral-800 mt-4">
                                    <CurrentChart data={histData} label={activeSymbol} />
                                    </div>
                                </motion.div>}
                </div>
            </div>
            <div className="m-4">
                <Info activeSymbol={activeSymbol} />
            </div>
        </div>
    )
}