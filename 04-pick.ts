// Implement the built-in Pick<T, K> generic without using it.

interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[K]
}


type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}