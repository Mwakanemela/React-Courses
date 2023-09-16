import './App.css';
import { useState } from 'react';
function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")
  

  const handleChange = (event) => {
      setNewTask(event.target.value)
  }
  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName)
      {
        return false
      } else {
        return true
      }
    })
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>Crud in React, useState</h1>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
            
          ) 
          
        }
        )}
        
      </div>
    </div>
  );
}

export default App;
