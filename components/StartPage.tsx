"use client";

import { useState } from "react";
import { getHistorical } from "../utils/getHistorical";
import CryptoList from "./cryptoList";
import CurrentChart from "./currentChart";
import Info from "./info";

export default function StartPage({data}: any) {
    const [activeSymbol, setActiveSymbol] = useState('BTC');
    const [histData, setHistData] = useState(data.historical)

    async function getHist(symbol: string) {
        console.log("get historfical")
        console.log("symbol", symbol)
        const histData = await getHistorical(symbol)
        console.log("set ata")
        setHistData(histData)
        console.log("hist", histData)
    }
    
    return (
        <div>
            <div className="md:flex block">
                <div className="md:w-1/3 p-4">
                    <CryptoList data={data.topTen.DISPLAY} setActiveSymbol={setActiveSymbol} active={activeSymbol} getHist={getHist} />
                </div>
                <div className="md:w-2/3 w-full text-center p-4 mt-8">
                    <CurrentChart data={histData} />
                </div>
            </div>
            <div className="m-4">
                <Info />
            </div>
        </div>
    )
}