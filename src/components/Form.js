import React from 'react'
import { useState } from 'react'

export const Form = ({addTodo}) => {
  const [value,setValue] = useState('')
  const handle = (e)=>{
    e.preventDefault();
    if (value){
        addTodo(value)
    }
    setValue("");
  }
  return (
    <form onSubmit={handle}>
        <input type='text' placeholder='What to do' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
