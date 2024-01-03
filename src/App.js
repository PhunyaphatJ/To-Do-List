import './App.css';
import Todo from './components/Todo';
import { Form } from './components/Form';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos([...todos,todo]);
  }
  return (
    <div className="d-flex flex-column justify-content-center align-item-center p-2 bg-black">
      <Form addTodo={addTodo}/>
      {todos.map((todo,index)=>(
        <Todo todo={todo} key={index}/>
      ))}
    </div>
  );
}

export default App;
