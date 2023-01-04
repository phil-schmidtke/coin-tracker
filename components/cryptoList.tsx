"use client";

import { motion } from "framer-motion";
import CryptoListItem from "./cryptoListItem";

type CryptoListProps = {
    data: any;
    setActiveSymbol: any;
    getHist: (symbol: string) => Promise<void>;
    active: string;
}

export default function CryptoList({data, setActiveSymbol, getHist, active}: CryptoListProps) {
    
    const ListData = [
        {link: "BTC", name: "Bitcoin", ticker: "BTC"},
        {link: "ETH", name: "Ethereum", ticker: "ETH"},
        {link: "USDT", name: "Tether", ticker: "USDT"},
        {link: "BNB", name: "BNB", ticker: "BNB"},
        {link: "USDC", name: "USD Coin", ticker: "USDC"},
        {link: "BUSD", name: "Binance USD", ticker: "BUSD"},
        {link: "XRP", name: "XRP", ticker: "XRP"},
        {link: "DOGE", name: "Dogecoin", ticker: "DOGE"},
        {link: "ADA", name: "Cardano", ticker: "ADA"},
        {link: "MATIC", name: "Polygon", ticker: "MATIC"},
    ]

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <motion.h1 initial={{ opacity: 0}} animate={{opacity: 100}} transition={{delay: 0.2, duration: 2}} className="text-xl font-bold">Top 10</motion.h1>
            <motion.div initial={{ opacity: 0}} animate={{opacity: 100}} transition={{delay: 0.4, duration: 2}} className="flex justify-between mx-2 my-2">
                <h2>Coin</h2>
                <h2>Market Cap</h2>
                <h2>Price</h2>
            </motion.div>
            {ListData.map((item, index) => {
                return (
                    <CryptoListItem data={data} setActiveSymbol={setActiveSymbol} getHist={getHist} link={item.link} name={item.name} ticker={item.ticker} active={active} key={index} delay={index}/>
                )
            })}
        </motion.div>
    )
}
