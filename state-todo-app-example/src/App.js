import './App.css';
import { useState } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: 'Köp kaffe' },
    { id: 1, task: 'Köp kaka' },
    { id: 2, task: 'Brygg kaffe' },
    { id: 3, task: 'Drick kaffe' }
  ]);

  const todoItems = todos.map((todo) => {
    return <TodoItem task={ todo.task } key={ todo.id } />
  });

  function addTodo(todoText) {
    const newTodo = {
      id: todos.length,
      task: todoText
    }

    const todoArrayCopy = [...todos]; // Skapa en kopia av arrayen
    todoArrayCopy.push(newTodo); // Pusha in den nya todon i vår array

    setTodos(todoArrayCopy); // Uppdatera vårt state med den nya arrayen
  }

  return (
    <div className="App">
      <ul>
        { todoItems }
      </ul>
      <AddTodo addTodo={ addTodo } />
    </div>
  );
}

export default App;
