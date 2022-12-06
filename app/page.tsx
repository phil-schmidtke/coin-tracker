import CryptoList from "../components/cryptoList"
import CurrentChart from "../components/currentChart"
import { getTopTen } from "../utils/getTopTen"

async function getData() {
  const data = await getTopTen()
  return data
}

export default async function Home() {
  const data = await getData()
  console.log("data", data.DISPLAY.ETH.USD.PRICE)
  return (
    <div className="md:flex block">
      <div className="md:w-1/3 p-4">
        <CryptoList data={data} />
      </div>
      <div className="w-2/3 text-center p-4 mt-8">
        <div className="border-2 border-neutral-800">
          <CurrentChart data={data} />
        </div>
      </div>
    </div>
  )
}
