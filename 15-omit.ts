// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>] : T[key] 
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}