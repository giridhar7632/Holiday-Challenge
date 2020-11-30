import styles from '../../styles/Home.module.css'

export default function Header() {
  const header={
    height: "100vh",
    background: "#206391",
    color: "#FFFFFF"
  }
  return(
    <header style={header}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          HOLIDAY CHALLENGE
        </h1>
        <p className={styles.date}>19<sup>th</sup> - 25<sup>th</sup> December, <span className={styles.year}>2020</span></p>
        {/* Registration Form */}
        <button className={styles.btn}><a href="https://airtable.com/shrWZ1BTvA1GzzVnv"> Register Now! </a></button>
      </div>  
      <img src="/snowman.svg" alt="snowman" className={styles.snowman} />
      
    </header>
  )
}