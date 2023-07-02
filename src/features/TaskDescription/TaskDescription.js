import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import styles from './TaskDescription.module.css'

function TaskDescription({ tasks, changeDescription }) {
  const id = useParams().id
  const navigate = useNavigate()
  const task = tasks.find((task) => task.id === id)

  
  const handleNavigation = useCallback(() => {
    navigate('..', { relative: 'path' })
  }, [navigate])

  useEffect(() => {
    if (!task) {
      handleNavigation()
    }
  }, [task, handleNavigation])


  return (
    <div className={styles.taskDescription}>
      <h3>{task?.text}</h3>
      <textarea
        type="text"
        value={task?.description}
        onChange={(event) => {
          changeDescription(id, event)
        }}
        placeholder="У этой задачи пока нет описания"
      >
        {task?.description}
      </textarea>
      <Link to="/" className={styles.buttonClose}>
        X
      </Link>
    </div>
  )
}

export default TaskDescription

