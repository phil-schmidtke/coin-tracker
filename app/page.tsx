import { TopTen } from "../utils/topTen"
import CryptoList from "../components/cryptoList"

async function getData() {
  const data = await TopTen()
  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="md:w-1/2 p-4">
      <CryptoList data={data} />
    </div>
  )
}
