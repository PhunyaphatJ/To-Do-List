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
            <div  className='d-flex flex-column form-group'>
                <label className='h1'>Task</label>
                <input type='text' className='form-control' placeholder='What to do' value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
                <button type='submit' className='btn btn-primary '>Submit</button>
        </form>
  )
}
