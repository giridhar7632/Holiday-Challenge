import styles from '../../styles/Home.module.css'

export default function Mission(){
  const mission = {
    height: "100vh",
    width: "100vw",
    background: "#FFFFFF",
    color: "#206391"
  }
  const btn = {
    background: "#206391",
    color: "#FFFFFF"
  }
  return(
    <div style={mission}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your Mission🚀</h1>
        <p className={styles.text}>This is a week long challenge. You have to <b className={styles.hilight}>build a holiday themed website</b> using any web technologies like HTML, CSS and JavaScript, Angular, React and more! Let your creativity shine and show us your creation😋.</p>
        {/* Link the pdf from the support.studentswhocode.org account */}
        <button className={styles.btn} style={btn}><a href="https://docs.google.com/document/d/1wZ5tEPOrGIRHWQz9QYKBb8VOPD2MdKRTmUN-UzaWq1o/edit?usp=sharing" target="_blank">Problem Statement</a></button>
      </div>
    </div>
  )
}