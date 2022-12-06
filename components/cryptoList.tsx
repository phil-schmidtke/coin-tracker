"use client";

import { motion } from "framer-motion";

type CryptoListProps = {
    data: any;
    active: string;
}

export default function CryptoList({data, active}: CryptoListProps) {

    return (
        <div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'BTC' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/')} >
                <h1>Bitcoin</h1>
                <p>{data.BTC.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'ETH' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/ETH')}>
                <h1>Ethereum</h1>
                <p>{data.ETH.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'USDT' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/USDT')}>
                <h1>Tether</h1>
                <p>{data.USDT.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'BNB' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/BNB')}>
                <h1>BNB</h1>
                <p>{data.BNB.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'USDC' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/USDC')}>
                <h1>USDC</h1>
                <p>{data.USDC.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'BUSD' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/BUSD')}>
                <h1>Binance USD</h1>
                <p>{data.BUSD.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.7 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'XRP' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/XRP')}>
                <h1>XRP</h1>
                <p>{data.XRP.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'DOGE' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/DOGE')}>
                <h1>Dogecoin</h1>
                <p>{data.DOGE.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.9 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'ADA' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/ADA')}>
                <h1>Cardano</h1>
                <p>{data.ADA.USD.PRICE}</p>
            </motion.div>
            <motion.div initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1 }}
                    className={`flex justify-between my-4 bg-neutral-800 p-4 rounded-xl drop-shadow-2xl ${active === 'MATIC' ? 'bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500' : ''}`}
                    onClick={() => window.location.replace('/MATIC')}>
                <h1>Polygon</h1>
                <p>{data.MATIC.USD.PRICE}</p>
            </motion.div>
        </div>
    )
}