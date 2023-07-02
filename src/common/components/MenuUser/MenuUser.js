import { useState } from 'react'
import styles from './MenuUser.module.css'

const MenuUser = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <nav
        onClick={() => setActiveMenu(!activeMenu)}
        className={styles.menuIcon}
      ></nav>
      {activeMenu && (
        <div className={styles.menu}>
          <div className={styles.menuUp}>
            <ul>
              <li>Профиль</li>
              <li>Выход</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuUser