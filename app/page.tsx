import CryptoList from "../components/cryptoList"
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
      <div className="md:w-1/4 p-4">
        <CryptoList data={data} />
      </div>
      <div className="w-3/4 text-center p-4">
        Chart
      </div>
    </div>
  )
}
