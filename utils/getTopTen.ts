export async function getTopTen() {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,BNB,USDC,BUSD,XRP,DOGE,ADA,MATIC&tsyms=USD,EUR', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Apikey 312281aabbcd85be409d977d63c9d3a357ea8434ed8725a377f1a965401f3500'
        }
    });
    const data = await res.json();
    return data
}