import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {


  return (
    <>
    <h1 className='flex justify-center text-3xl font-bold mt-5'>Todo List</h1>
      <AddTodo />
    <h2 className='flex justify-center text-3xl font-bold mt-5'>Todos...</h2>
      <Todo />
    </>
  )
}

export default App
