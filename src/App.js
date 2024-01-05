import './App.css';
import Todo from './components/Todo';
import { Form } from './components/Form';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (task)=>{
    setTodos([...todos,{todo:task,id:uuidv4()}])
  }

  const deleteHandle = (id) =>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }

  return (
    <div className="container">
      <Form addTodo={addTodo}/>
      {todos.map((todo)=>(
        <Todo todo={todo} key={todo.id} deleteHandle={deleteHandle}/>
      ))}
    </div>
  );
}

export default App;
