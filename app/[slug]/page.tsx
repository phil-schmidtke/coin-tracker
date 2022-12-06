import CryptoList from "../../components/cryptoList";
import CurrentChart from "../../components/currentChart";
import { getHistorical } from "../../utils/getHistorical";
import { getTopTen } from "../../utils/getTopTen";

async function getData(coin: string) {
    console.log("coin", coin)
    const topTen = await getTopTen()
    const historical = await getHistorical(coin)
    const data = {topTen, historical}
    return data
}

type PageProps = {
    params: any
}

export default async function Page({ params }: PageProps) {
    const data = await getData(params.slug)

    return (
        <div className="md:flex block">
            <div className="md:w-1/3 p-4">
                <h1 className="text-xl font-bold">Top 10</h1>
                <CryptoList data={data.topTen.DISPLAY} active={params.slug} />
            </div>
            <div className="md:w-2/3 w-full text-center p-4 mt-8">
                <h1 className="text-xl font-bold">{params.slug}</h1>
                <div className="border-2 border-neutral-800 mt-4">
                    <CurrentChart data={data.historical} />
                </div>
            </div>
        </div>
    )
}