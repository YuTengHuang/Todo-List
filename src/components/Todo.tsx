import { MdDelete, MdEdit,MdArrowDropDown } from "react-icons/md";
import { TodoContentProps } from '../types'
import { useState } from "react";

type Props<T> = {
    todo: TodoContentProps,
    toggleEditing: (id: T)=>void
    deleteTodo: (id: T)=>void
    toggleDone: (id: T)=>void
}

const Todo: React.FC<Props<number>> = ({ todo, toggleEditing, deleteTodo, toggleDone }) =>{
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="todoContent">

            <div className={`todo ${todo.isDone? 'done' : ''}`}>
            
                <p onClick={()=>toggleDone(todo.id)}>{ todo.content }</p>
                
                {todo.content.length > 50 
                ?   <button className="check-btn hover-title" onClick={toggleShowAll}>
                        <MdArrowDropDown style={{ width: "30px", height: "30px" }} />
                        <span className="tooltip">查看</span>
                    </button>    
                : ''
                }
                <div className="todo-btns">
                    <button className="hover-title" 
                    onClick={()=>toggleEditing(todo.id)}
                    disabled={todo.isDone? true : false}
                    >
                        <MdEdit style={{width: "30px", height: "30px"}}/>
                        <span className="tooltip">{todo.isDone? "已完成" : "編輯"}</span>
                    </button>
                    <button className="hover-title" onClick={()=>deleteTodo(todo.id)}>
                        <MdDelete style={{width: "30px", height: "30px"}}/>
                        <span className="tooltip">刪除</span>
                    </button>
                </div>


            </div>

            <div className={`allContent-bar${showAll? ' showAll' : ''}`}>
                <pre>{ todo.content }</pre>
            </div>

        </div>

    )
}

export default Todo