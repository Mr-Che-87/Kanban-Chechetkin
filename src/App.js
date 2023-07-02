import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Main from './features/Main/Main'
import Footer from './features/Footer/Footer'
import Header from './features/Header/Header'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      setTasks(tasks)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const newProcessor = (text) => {
    const newTask = {
      text,
      section: 'Требуют уточнения',
      id: uuidv4().slice(0, 5),
      description: '',
    }
    setTasks([...tasks, newTask])
  }

  const transferProcessor = (id, title) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, section: title } : { ...task }
      })
    )
  }

  

  const changeDescription = (id, event) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, description: event.target.value }
          : { ...task }
      })
    )
  }


  const Count = (title) =>
  tasks.filter((task) => task.section === title).length   //?????



  return (
    <div className="App">
      <Header />
      <Main
        newTask={newProcessor}
        tasks={tasks}
        transferTask={transferProcessor}
        changeDescription={changeDescription}
      />
      <Footer Count={Count} clear={() => setTasks([])} />
    </div>
  )
}

export default App