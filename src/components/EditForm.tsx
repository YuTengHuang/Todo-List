import { useState } from "react"
import { TodoContentProps } from '../types'

interface EdittodoFuncProp{
    todo: TodoContentProps
    EditTodo: (id: number, newContent:string)=>void
}

const EditForm: React.FC<EdittodoFuncProp> = ({todo, EditTodo})=>{

    const [content, setContent] = useState(todo.content)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        content.trim()? EditTodo(todo.id, content) : alert("不能是空白字")
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <textarea placeholder="輸入待辦事項"
            rows={5}
            value={content}
            onChange={(e)=>{setContent(e.currentTarget.value)}}/>
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm