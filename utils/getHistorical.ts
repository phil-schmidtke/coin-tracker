export async function getHistorical(coin: string) {
    const res = await fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=150`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Apikey ${process.env.Apikey}`
        }
    })
    const data = await res.json();
    for (let i = 0; i < data.Data.Data.length; i++) {
        data.Data.Data[i].value = (data.Data.Data[i].high + data.Data.Data[i].low) / 2;
    }
    return data
}