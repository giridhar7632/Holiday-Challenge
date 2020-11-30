import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Mission from './components/Mission'
import Footer from './components/Footer'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Holiday Overlay</title>
        <link rel="icon" href="/snowman.svg" />
      </Head>
      <Header />
      <Mission />
      <Footer />
    </div>
  )
}
