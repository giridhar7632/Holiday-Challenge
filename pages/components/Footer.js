import Snow from 'resnow'
import styles from "../../styles/Home.module.css"

export default function Footer(){
  const footer={
    height: "100vh",
    background: "#206391",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center"
  }
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  const snow = {
    position: "absolute",
    top: "200%",
    width: "100%"
  }
  return(
    <>
    <div style={snow}>
      <Snow />
    </div>
    <div style={footer}>
      
      <div style={center}>
        <p className={styles.heading}>An oppurtunity to <span className={styles.hilight}>test your skills </span> and <span className={styles.hilight}>compete</span> with others</p>
        <button className={styles.btn}><a href="https://airtable.com/shrWZ1BTvA1GzzVnv"> Register Now! </a></button>
        <p className={styles.text}>Feel free to contact if you have any queries</p>
        <p className={styles.text}>&copy; Students Who <span className={styles.hilight}>Code</span> - 2020</p>
      </div>
    </div>
    </>
  )
}