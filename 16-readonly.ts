// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. 
// When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyReadOnly<T, K extends keyof T = keyof T> = {
    +readonly[key in K]: T[key]
} & {
    -readonly[key in Exclude<keyof T, K>]: T[key]
}

const todo: MyReadOnly<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK