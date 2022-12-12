import StartPage from "../components/StartPage"
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
    <div>
      <StartPage data={data} />
    </div>
  )
}
