import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getTopTen } from '../utils/getTopTen'
import { getHistorical } from '../utils/getHistorical'
import StartPage from '../components/StartPage'

const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const topTen = await getTopTen()
  const historical = await getHistorical('BTC')
  const data = { topTen, historical }
  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <main className={styles.main}>
      <StartPage data={data} />
    </main>
  )
}
