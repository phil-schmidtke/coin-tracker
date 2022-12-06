export async function getTopTen() {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,BNB,USDC,BUSD,XRP,DOGE,ADA,MATIC&tsyms=USD,EUR', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Apikey ${process.env.Apikey}`
        }
    });
    const data = await res.json();
    return data
}