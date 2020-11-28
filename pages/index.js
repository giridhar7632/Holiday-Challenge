import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Holiday Overlay</title>
        <link rel="icon" href="/snowman.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              HOLIDAY CHALLENGE
            </h1>
            <p>
            A week long challenge during the Holiday week. Your task is to create a holiday themed website like countdown to christmas site, holiday photos posting site, etc. using web technologies. An opportunity to test your wide variety of coding, design, and problem-solving skills The challenge covers a wide range of technologies, including HTML, CSS, JavaScript, React and more!
            </p>
            <div className={styles.btncontainer}>
              <button id={styles.btn} className={styles.explore}>Explore</button>
              <button id={styles.btn} className={styles.register}>Register</button>
            </div>
          </div>
          <img src="/snowman.svg" alt="snowman" className={styles.snowman} />
          <span className={styles.skewed} onScroll={() => {
            var value = 10 + window.scrollY/60
            this.style.transform = `skewY(${value}deg)`
            console.log(value)
          }}></span>
        </div>
      </main>
    </div>
  )
}
