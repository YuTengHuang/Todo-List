import './App.css'
import TodoWrapper from './components/TodoWrapper'
import TodoProvider from "./context/TodoContext"
function App() {


  return (
    <TodoProvider>
      <TodoWrapper />
    </TodoProvider>
  )
}

export default App
