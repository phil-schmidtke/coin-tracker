import CryptoList from "../components/cryptoList"
import CurrentChart from "../components/currentChart"
import Info from "../components/info"
import { getHistorical } from "../utils/getHistorical"
import { getTopTen } from "../utils/getTopTen"

async function getData() {
  const topTen = await getTopTen()
  const historical = await getHistorical('BTC')
  const data = {topTen, historical}
  return data
}

export default async function Home() {
  const data = await getData()
  console.log(data.topTen.DISPLAY.BTC)
  return (
    <div>
      <div className="md:flex block">
        <div className="md:w-1/3 p-4">
          <CryptoList data={data.topTen.DISPLAY} active="BTC" />
        </div>
        <div className="md:w-2/3 w-full text-center p-4 mt-8">
          <CurrentChart data={data.historical} />
        </div>
      </div>
      <div className="m-4">
        <Info />
      </div>
    </div>
  )
}
