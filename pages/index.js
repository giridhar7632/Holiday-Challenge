import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Holiday Overlay</title>
        <link rel="icon" href="/snowman.svg" />
      </Head>
      <Header />
    </div>
  )
}
