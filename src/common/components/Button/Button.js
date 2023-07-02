import styles from './Button.module.css'

function Button({ children, ...props }) {
  return (
    <button
      className={`${styles.button} ${
        children === 'Принять' ? styles.submit : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

/*
import styles from '../styles/Button.module.css'

function Button({ children, ...props }) {
  return (
    <button
      className={`${styles.button} ${
        children == 'Принять' ? styles.submit : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
*/