import { useState } from 'react'
import Button from './../../common/components/Button/Button'
import Input from './../../common/components/Input/Input'
import SelectTask from './../../common/components/SelectTask/SelectTask'

function TaskForm({ newTask, type, tasks, transferTask, title }) {
  const [text, setText] = useState('')
  const [activeInput, setActiveInput] = useState(false)
  const [valueSelect, setValueSelect] = useState({ value: null, id: null })


  const inputManually = (event) => {
    event.preventDefault()
    if (text) {
      newTask(text)
      setText('')
      setActiveInput(!activeInput)
    }
  }

  const inputAutomat = (event) => {
    event.preventDefault()
    setActiveInput(!activeInput)
  }



    const submitInput = (event) => {
    event.preventDefault()
    const id = valueSelect.id
    if (valueSelect.value) {
      transferTask(id, title)
      setActiveInput(!activeInput)
    }
  }


  const selectInput = tasks
    .filter((task) => task.section === type)
    .map((task) => {
      return { value: task.text, label: task.text, id: task.id }
    })

    
  return activeInput ? (
    type === 'start' ? (
      <>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={inputManually}>Принять</Button>
      </>
    ) : (
      <>
        <SelectTask
          options={selectInput}
          defaultValue={valueSelect.value}
          onChange={({ value, id }) => {
            setValueSelect({ value, id })
          }}
        />
        <Button onClick={submitInput}>Принять</Button>
      </>
    )
  ) : (
    <Button
      onClick={inputAutomat}
      disabled={
        !(type === 'start') &&
        !tasks.filter((task) => task.section === type).length
      }
    >
      +Добавить карточку
    </Button>
  )
}

export default TaskForm
