var yahooFinance = require('yahoo-finance');

export async function TopTen() {
    const btc = await yahooFinance.quote('BTC-USD');
    const eth = await yahooFinance.quote('ETH-USD');
    const usdt = await yahooFinance.quote('USDT-USD');
    const bnb = await yahooFinance.quote('BNB-USD');
    const usdc = await yahooFinance.quote('USDC-USD');
    const busd = await yahooFinance.quote('BUSD-USD');
    const xrp = await yahooFinance.quote('XRP-USD');
    const doge = await yahooFinance.quote('DOGE-USD');
    const ada = await yahooFinance.quote('ADA-USD');
    const matic = await yahooFinance.quote('MATIC-USD');
    const data = {btc: btc, eth: eth, usdt: usdt, bnb: bnb, usdc: usdc, busd: busd, xrp: xrp, doge: doge, ada: ada, matic: matic};
    return data
}