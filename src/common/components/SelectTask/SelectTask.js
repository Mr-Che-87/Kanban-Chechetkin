import Select from 'react-select'
import styles from './SelectTask.module.css'

function SelectTask(props) {
  return (
    <Select
      placeholder="Выберите вашу задачу"
      className={styles.selectTask}
      {...props}
    />
  )
}

export default SelectTask
