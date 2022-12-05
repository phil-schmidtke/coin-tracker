"use client";

import { motion } from "framer-motion";

export default function CryptoList({data}: any) {
    return (
        <div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Bitcoin</h1>
                <p>{data.btc.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Ethereum</h1>
                <p>{data.eth.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Tether</h1>
                <p>{data.usdt.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>BNB</h1>
                <p>{data.bnb.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>USDC</h1>
                <p>{data.usdc.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Binance USD</h1>
                <p>{data.busd.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>XRP</h1>
                <p>{data.xrp.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Dogecoin</h1>
                <p>{data.doge.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Cardano</h1>
                <p>{data.ada.price.regularMarketPrice}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl">
                <h1>Polygon</h1>
                <p>{data.matic.price.regularMarketPrice}</p>
            </motion.div>
        </div>
    )
}