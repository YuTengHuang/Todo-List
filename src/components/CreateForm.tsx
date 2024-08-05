import React from "react"
import { TodoContext } from "../context/TodoContext"

type Props={
    addTodo: (content: string) => void
}

const CreateForm: React.FC<Props> = () =>{

    const { addTodo } = React.useContext(TodoContext)!;
    const [content, setContent] = React.useState<string>('');

    const handleForm: React.ComponentProps<"textarea">["onChange"] = (e) => {
        setContent(e.currentTarget.value)
    };

    const handleSaveTodo = (e: React.FormEvent, content: string) => {
        e.preventDefault()
        content.trim()? addTodo(content) : alert("不能是空白字")
        setContent('')
    };

    return (
        <form className="create-form" onSubmit={(e) => handleSaveTodo(e, content)}>
            <textarea
            rows={5}
            placeholder="輸入待辦事項" 
            value={ content }
            onChange={ handleForm }/>
            <button disabled={content === ''? true : false} >加入</button>
        </form>
    )
}

export default CreateForm