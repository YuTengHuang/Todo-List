import React, { useEffect } from 'react'
import { TodoContentProps, TodoContextType } from '../types'


export const TodoContext = React.createContext<TodoContextType | null>(null)

const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) =>{
    
    const [todos, setTodos] = React.useState<TodoContentProps[]>(()=>{
        const getTodos = localStorage.getItem('todos')
        return getTodos ? JSON.parse(getTodos) : [
            {id: Date.now(), content: '第一件事', isDone: false, isEdit: false},
            {id: Date.now()+0.1, content: '第二件事', isDone: true, isEdit: false},
            {id: Date.now()+0.2, content: '第三件事', isDone: false, isEdit: false},
            {id: Date.now()+0.3, 
                content: 'TypeScript是由微軟進行開發和維護的一種開源的程式語言。TypeScript是JavaScript的嚴格語法超集，提供了可選的靜態型別檢查。\n\
    \n\
    TypeScript的知名開發者有C#的首席架構師兼Delphi和Turbo Pascal的創始人——安德斯·海爾斯伯格。\n\
    \n\
    TypeScript是為開發大型應用程式而設計的，且可轉譯成JavaScript。由於TypeScript是JavaScript的嚴格語法超集，因此任何現有的JavaScript程式都是合法的TypeScript程式。',
                isDone: false, isEdit: false},
        ]
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const addTodo = (content: string) =>{
        const newTodo: TodoContentProps = {
            id: Date.now(),
            content: content,
            isDone: false,
            isEdit: false
        }

        setTodos([...todos, newTodo])
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const deleteTodo = (id: number) =>{
        setTodos(todos.filter((todo) =>{
            return todo.id !== id
        }))
    }

    const toggleEditing = (id: number) =>{
        setTodos(todos.map((todo)=>{
            return todo.id === id
            ?{...todo, isEdit: !todo.isEdit}
            : todo
        }))
    }

    const EditTodo = (id: number, newContent:string) =>{
        setTodos(todos.map((todo)=>{
            return todo.id === id
            ? {...todo, content: newContent, isEdit: false}
            : todo
        }))
    }

    const toggleDone = (id: number) =>{
        setTodos(todos.map((todo)=>{
            return todo.id === id
            ? {...todo, isDone: !todo.isDone}
            : todo
        }))
    }
    
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleEditing, EditTodo, toggleDone }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;