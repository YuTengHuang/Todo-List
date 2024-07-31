export interface TodoContentProps {
    id: number
    content: string
    isDone: boolean
    isEdit: boolean
}

export type TodoContextType = {
    todos: TodoContentProps[]
    addTodo: (content: string) => void
    deleteTodo: (id: number) => void
    toggleEditing: (id: number) => void
    toggleDone: (id: number) => void
    EditTodo: (id: number, content: string) => void
}