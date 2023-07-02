import styles from './Header.module.css'
import MenuUser from "./../../common/components/MenuUser/MenuUser";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Канбан-доска</h1>
      <MenuUser />
    </header>
  )
}

export default Header