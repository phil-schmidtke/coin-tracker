import CryptoList from "../components/cryptoList"
import CurrentChart from "../components/currentChart"
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

  return (
    <div className="md:flex block">
      <div className="md:w-1/3 p-4">
        <CryptoList data={data.topTen.DISPLAY} active="BTC" />
      </div>
      <div className="md:w-2/3 w-full text-center p-4 mt-8">
        <div className="border-2 border-neutral-800">
          <CurrentChart data={data.historical} />
        </div>
      </div>
    </div>
  )
}
