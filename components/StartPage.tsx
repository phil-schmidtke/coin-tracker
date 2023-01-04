"use client";

import { useState } from "react";
import { getHistorical } from "../utils/getHistorical";
import CryptoList from "./CryptoList";
import CurrentChart from "./CurrentChart";
import Info from "./Info";

export default function StartPage({ data }: any) {
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
                    {loading ? 
                    <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-fuchsia-900"></div>
                    </div>
                    :
                    <CurrentChart data={histData} label={activeSymbol} />
                    }
                </div>
            </div>
            <div className="m-4">
                <Info activeSymbol={activeSymbol} />
            </div>
        </div>
    )
}