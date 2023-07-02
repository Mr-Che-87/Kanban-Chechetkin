import styles from './Count.module.css'

function Count({ children, Count, title }) {
  return (
    <p className={styles.Count}>
      {children}: {Count(title)}
    </p>
  )
}

export default Count
