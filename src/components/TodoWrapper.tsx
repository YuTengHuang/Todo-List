import React, { useState, useContext } from "react"

import CreateForm from "./CreateForm"
import EditForm from "./EditForm"
import Todo from "./Todo"

import { TodoContext } from "../context/TodoContext"
import { TodoContentProps, TodoContextType} from "../types"


const TodoWrapper: React.FC = () => {

    const { todos, EditTodo, toggleEditing, addTodo, deleteTodo, toggleDone } = useContext(TodoContext) as TodoContextType
    const [filter, setFilter] = useState<'all' | 'UnDone' | 'Done'>('all'); 

    const filteredTodos = todos.filter(todo => {
        switch(filter){
            case 'all':
                return true
                
            case 'UnDone':
                return !todo.isDone
                
            case 'Done':
                return todo.isDone
                
            default:
                return true
        }
    });

    const isActive = (id:string) =>{
        return filter === id? 'active' : ''
    }

    return(
        <div className="todoWrapper">
            <div className="title">
                <h1>待辦事項</h1>
            </div>

            <CreateForm addTodo={addTodo}/>

            <div className="filterLinks">
                <span className={isActive('all')} onClick={() => setFilter('all')}>全部</span>
                <span className={isActive('UnDone')} onClick={() => setFilter('UnDone')}>未完成</span>
                <span className={isActive('Done')} onClick={() => setFilter('Done')}>已完成</span>
            </div>

            <div className='todoContents'>
                { filteredTodos.length === 0
                ? <h1 style={{marginTop: '50px'}}>沒有待辦事項</h1>
                : filteredTodos.map((todo: TodoContentProps)=>{
                    return todo.isEdit
                    ? <EditForm todo={todo} key={todo.id} EditTodo={EditTodo} /> 
                    :<Todo todo={todo} key={todo.id} toggleEditing={toggleEditing} deleteTodo={deleteTodo} toggleDone={toggleDone}/>
                })}
            </div>

        </div>
    )
}


export default TodoWrapper