
import { useState } from 'react'
import './styles.css'
function App() {
  const[newItem,setnewItem]= useState("")
  const [todos,setTodos] =useState([])
  function handleSubmit(e){
    e.preventDefault()
    setTodos (currentTodos =>{
      return [
        ...currentTodos,{id:crypto.randomUUID(),title:newItem,completed:false},
      ]
    })
    setnewItem("")

  }

  return ( 
    <>
   <form onSubmit={handleSubmit} className='new-item-form'>  
      <div className='form-row'>
        <label htmlFor='item'> New Item</label>
        <input 
        value={newItem}  
        type='text' 
        id='item' 
        onChange= {e =>  setnewItem(e.target.value)} />
        <button className='btn'>Add item</button>
     </div>
   </form>
  <h1 className='header'>Todo List</h1>
    < ul className='list' >
      {todos.map(todo =>{return(
    <li>
      <label>
    <input  type="checkbox" />
     {todo.title}
    </label>
    <button className='btn btn-danger' >Delete</button>
    </li>
  )} )}
    </ul>
</>
  )
}

export default App
